import { useState, useEffect, useRef } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, limit, serverTimestamp } from "firebase/firestore";
import { Send, Terminal } from "lucide-react";
import gsap from "gsap";

export default function Guestbook() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const q = query(
            collection(db, "guestbook"),
            orderBy("createdAt", "desc"),
            limit(20)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(msgs);

            // Animate new items
            if (msgs.length > 0) {
                gsap.fromTo(listRef.current.children,
                    { opacity: 0, x: -10 },
                    { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" }
                );
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !name.trim()) return;

        setLoading(true);
        try {
            await addDoc(collection(db, "guestbook"), {
                text: newMessage,
                name: name,
                createdAt: serverTimestamp(),
            });
            setNewMessage("");
            setLoading(false);
        } catch (error) {
            console.error("Error adding document: ", error);
            setLoading(false);
            alert("Connection Error: Check console (Did you add Firebase keys?)");
        }
    };

    return (
        <div className="border border-border p-6 bg-surface/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <Terminal className="w-5 h-5 text-accent" />
            </div>

            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-accent">Guest_Log</span>
                <span className="text-xs text-text-secondary font-mono mt-1">// Leave a mark</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Message List */}
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar" ref={scrollRef}>
                    <div ref={listRef} className="space-y-3">
                        {messages.length === 0 ? (
                            <div className="text-sm text-text-secondary italic">No entries yet. Be the first variables...</div>
                        ) : (
                            messages.map((msg) => (
                                <div key={msg.id} className="text-sm border-l-2 border-border pl-3 py-1 hover:border-accent transition-colors">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-bold text-accent">{msg.name || "Anonymous"}</span>
                                        <span className="text-[10px] text-text-secondary opacity-60">
                                            {msg.createdAt?.toDate().toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-text-primary/80 break-words">{msg.text}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">User_ID (Name)</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-surface border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent transition-colors text-text-primary placeholder:text-text-secondary/30"
                            placeholder="Identify yourself..."
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">Packet_Payload (Message)</label>
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="w-full bg-surface border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent transition-colors text-text-primary h-24 resize-none placeholder:text-text-secondary/30"
                            placeholder="Write something..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-accent text-background font-bold py-2 hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
                    >
                        {loading ? "Transmitting..." : (
                            <>
                                <span>Execute_Send</span>
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
