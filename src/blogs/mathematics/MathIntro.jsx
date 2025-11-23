import React from 'react';
import { BlockMath, InlineMath } from '../../components/Shared/KatexComponents';

export const meta = {
    slug: 'eulers-identity-intro',
    title: "Euler's Identity",
    category: 'Mathematics',
    date: 'Nov 23, 2025',
    summary: 'A structured explanation of Euler’s identity using differential-style organization.',
    plainText: `Euler’s identity links exponentials, complex numbers, and trigonometric functions in one compact expression. It expresses how rotation on the complex plane connects naturally to the exponential function.`
};

const MathIntro = () => {
    return (
        <article>

            <h1 className="text-3xl font-bold mb-6">1. Euler’s Identity and Complex Exponentials</h1>

            <p className="mb-4">
                Euler’s identity brings together <strong>exponential growth</strong>, <strong>complex numbers</strong>, and <strong>trigonometric rotation</strong> into a single compact equation. The formula uses the constants{' '}
                <InlineMath math="e" />, <InlineMath math="\pi" />, and <InlineMath math="i" /> and shows how rotation in the complex plane emerges naturally from the exponential function.
            </p>

            <div className="my-6 h-px bg-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.1 Structure of the Identity</h2>

            <p className="mb-4">
                The identity connects five constants. The key idea is that <strong>complex exponentials describe rotation</strong>. A rotation by an angle <InlineMath math="x" /> on the complex plane can be written with the exponential function, linking algebra and geometry.
            </p>

            <div className="my-4 text-center">
                <BlockMath math={`e^{i x} = \\cos x + i\\sin x`} />
            </div>

            <p className="mb-4">
                This relation shows that an exponential with an imaginary exponent equals a point on the unit circle. The real part is <InlineMath math="\cos x" /> and the imaginary part is <InlineMath math="\sin x" />. This lets us treat rotation as an exponential action.
            </p>

            <p className="mb-4">
                For a function like <InlineMath math="f(x, y)" />, a similar pattern appears: the equation defines something geometric, and the differential describes how small changes move us along that geometry. Euler’s identity works the same way but in the complex plane.
            </p>

            <div className="my-4 text-center">
                <BlockMath math={`e^{i\\pi} = -1`} />
            </div>

            <p className="mb-4">
                This expresses how a rotation of <InlineMath math="\pi" /> radians on the unit circle lands exactly at the point <InlineMath math="-1" /> on the real axis, showing that the exponential function behaves like a rotation operator in the complex plane.
            </p>

            <div className="my-6 h-px bg-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.2 The Identity from Euler’s Formula</h2>

            <p className="mb-4">
                Euler’s formula describes rotation, and Euler’s identity appears by choosing a specific angle. Start with the general statement of rotation and evaluate it at <InlineMath math="\pi" /> radians to obtain the full identity in compact form.
            </p>

            <div className="my-4 text-center">
                <BlockMath math={`e^{i\\pi} = \\cos \\pi + i\\sin \\pi`} />
            </div>

            <p className="mb-4">
                Here <InlineMath math="\\cos \\pi = -1" /> and <InlineMath math="\\sin \\pi = 0" />, so the exponential collapses to minus one. This connects the exponential curve with a simple real value by interpreting the exponent as a half rotation.
            </p>

            <p className="mb-4">
                Using this, we can rewrite the relation in a compact form. The rotation result <InlineMath math="e^{i x}" /> behaves like an operator, similar to how <InlineMath math="P\,dV" /> describes mechanical work in thermodynamics. Here the “work” is a change in phase on the complex plane.
            </p>

            <div className="my-4 text-center">
                <BlockMath math={`e^{i\\pi} + 1 = 0`} />
            </div>

            <p className="mb-4">
                This shows how algebra and geometry unify. The exponential takes us to <InlineMath math="-1" />, and adding one returns us to zero. The relationship is fundamental because it demonstrates how exponentials encode circular motion.
            </p>

            <p className="mb-4">
                <strong>Example:</strong> consider defining a new function representing rotation energy or phase energy. Let <InlineMath math="\\Phi = e^{ix}" />. Its differential with respect to angle is
            </p>

            <div className="my-4 text-center">
                <BlockMath math={`\\frac{d\\Phi}{dx} = i e^{ix}`} />
            </div>

            <p className="mb-4">
                This shows that <InlineMath math="\\Phi" /> depends naturally on angle <InlineMath math="x" /> and grows by rotating in the complex plane. This is useful when studying oscillations, waves, or any periodic system.
            </p>

            <p className="mb-4">
                Using mixed partials such as{' '}
                <InlineMath math={`\\left( \\frac{\\partial \\theta}{\\partial x} \\right)_{y}`} />{' '}
                reveals deeper symmetry, just like Maxwell relations. Here derivatives of phase angle link back to derivatives of cosine and sine, showing hidden structure in rotation.
            </p>

            <div className="my-4 text-center">
                <BlockMath math={`\\frac{d}{dx}(\\cos x) = -\\sin x \\quad , \\quad \\frac{d}{dx}(\\sin x) = \\cos x`} />
            </div>

            <p className="mb-4">
                These relations complete the picture by showing how exponential, rotational, and trigonometric behavior fit together smoothly through calculus and geometry.
            </p>
        </article>
    );
};

export default MathIntro;
