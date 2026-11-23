import React from "react";
import { CodeBlock } from "../../components/CodeBlock";

export const metadata = {
    title: "Step Response Analysis of P, PI, and PID Controllers Using MATLAB",
    slug: "matlab-p-pi-pid-controllers-step-response",
    date: "2026-11-23",
    category: "Physics",
    readTime: "5 min",
    summary:
        "A practical MATLAB simulation comparing the step responses of Proportional (P), Proportional-Integral (PI), and Proportional-Integral-Derivative (PID) controllers on a second-order dynamic plant, including closed-loop transfer functions and stepinfo performance characteristics.",
};

const matlabCode = `clc;
clear;
close all;

% Define Laplace variable
s = tf('s');

% Define the plant / controlled system
G = 1/(s^2 + 3*s + 2);

% Define control gains
kp = 10;    % Proportional gain
ki = 5;     % Integral gain
kd = 2;     % Derivative gain

% P Controller
C_P = kp;
T_P = feedback(C_P*G, 1);

% PI Controller
C_PI = kp + ki/s;
T_PI = feedback(C_PI*G, 1);

% PID Controller
C_PID = kp + ki/s + kd*s;
T_PID = feedback(C_PID*G, 1);

% Plot step responses
figure;
step(T_P, T_PI, T_PID);
grid on;

legend('P Controller', 'PI Controller', 'PID Controller');
title('Step Response of P, PI and PID Controllers');
xlabel('Time (s)');
ylabel('Amplitude');

% Display closed-loop transfer functions
disp('Closed-loop transfer function for P Controller:');
T_P

disp('Closed-loop transfer function for PI Controller:');
T_PI

disp('Closed-loop transfer function for PID Controller:');
T_PID

% Calculate performance characteristics
info_P = stepinfo(T_P);
info_PI = stepinfo(T_PI);
info_PID = stepinfo(T_PID);

% Display performance characteristics
disp('Performance of P Controller:');
disp(info_P);

disp('Performance of PI Controller:');
disp(info_PI);

disp('Performance of PID Controller:');
disp(info_PID);`;

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            {/* Overview Section */}
            <section className="space-y-4 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <p>
                    In classical control systems engineering, tuning feedback controllers to satisfy transient 
                    and steady-state performance requirements is an essential skill. 
                    This guide demonstrates how to simulate and compare the step responses of{" "}
                    <strong className="text-text-primary">Proportional (P)</strong>,{" "}
                    <strong className="text-text-primary">Proportional-Integral (PI)</strong>, and{" "}
                    <strong className="text-text-primary">Proportional-Integral-Derivative (PID)</strong> controllers 
                    applied to a continuous-time second-order dynamic plant in MATLAB.
                </p>
                <p>
                    By formulating transfer functions using the Laplace variable <code>s</code> and 
                    leveraging MATLAB’s <code>feedback</code> and <code>stepinfo</code> routines, we can directly 
                    observe how each control term alters closed-loop pole locations, rise time, overshoot, 
                    and steady-state error.
                </p>
            </section>

            <hr className="my-10 border-border" />

            {/* Theoretical Foundations */}
            <section className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    1. Mathematical Modeling
                </h3>
                
                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                    Consider an overdamped second-order plant transfer function:
                </p>

                <div className="bg-surface/60 border border-border rounded-lg p-4 font-mono text-center text-sm sm:text-base text-text-primary overflow-x-auto">
                    G(s) = 1 / (s² + 3s + 2) = 1 / ((s + 1)(s + 2))
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                    With unity negative feedback, the closed-loop complementary sensitivity transfer function is given by:
                </p>

                <div className="bg-surface/60 border border-border rounded-lg p-4 font-mono text-center text-sm sm:text-base text-text-primary overflow-x-auto">
                    T(s) = (C(s) · G(s)) / (1 + C(s) · G(s))
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="border border-border bg-surface/40 rounded-lg p-4">
                        <h4 className="font-semibold text-text-primary mb-2 text-base">P Controller</h4>
                        <div className="font-mono text-xs text-amber-500 mb-2">C_P(s) = K_p</div>
                        <p className="text-xs sm:text-sm text-text-secondary">
                            Increases system loop gain and reduces rise time, but leaves a finite steady-state tracking offset for step inputs.
                        </p>
                    </div>

                    <div className="border border-border bg-surface/40 rounded-lg p-4">
                        <h4 className="font-semibold text-text-primary mb-2 text-base">PI Controller</h4>
                        <div className="font-mono text-xs text-amber-500 mb-2">C_PI(s) = K_p + K_i/s</div>
                        <p className="text-xs sm:text-sm text-text-secondary">
                            Adds an open-loop pole at the origin (Type 1 system), completely eliminating steady-state error while increasing overshoot.
                        </p>
                    </div>

                    <div className="border border-border bg-surface/40 rounded-lg p-4">
                        <h4 className="font-semibold text-text-primary mb-2 text-base">PID Controller</h4>
                        <div className="font-mono text-xs text-amber-500 mb-2">C_PID(s) = K_p + K_i/s + K_d·s</div>
                        <p className="text-xs sm:text-sm text-text-secondary">
                            Derivative action introduces phase lead and effective damping, mitigating transient overshoot and expediting settling time.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="my-10 border-border" />

            {/* MATLAB Code Section */}
            <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                        2. MATLAB Simulation Script
                    </h3>
                    <span className="text-xs font-mono text-text-secondary">
                        Click "Copy" in the top-right corner to copy to clipboard
                    </span>
                </div>

                <p className="text-base text-text-secondary">
                    Run the following script directly in MATLAB (R2018b or newer with the Control System Toolbox installed):
                </p>

                <CodeBlock code={matlabCode} language="matlab" />
            </section>

            <hr className="my-10 border-border" />

            {/* Code Breakdown */}
            <section className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    3. Code Execution Breakdown
                </h3>

                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 1: System Definition via Laplace Variable
                        </h4>
                        <p className="text-sm text-text-secondary">
                            <code>s = tf('s')</code> instantiates an LTI transfer function variable in the continuous Laplace domain, allowing intuitive algebraic formulation of polynomials like <code>G = 1/(s^2 + 3*s + 2)</code>.
                        </p>
                    </div>

                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 2: Controller Definition & Feedback Interconnection
                        </h4>
                        <p className="text-sm text-text-secondary">
                            Using gains <code>kp = 10</code>, <code>ki = 5</code>, and <code>kd = 2</code>, we formulate <code>C_P</code>, <code>C_PI</code>, and <code>C_PID</code>. The command <code>feedback(C * G, 1)</code> computes the closed-loop transfer function assuming standard negative unity feedback:
                        </p>
                        <ul className="list-disc list-inside text-sm text-text-secondary space-y-1 mt-2">
                            <li><strong className="text-text-primary">T_P(s):</strong> <code>10 / (s² + 3s + 12)</code></li>
                            <li><strong className="text-text-primary">T_PI(s):</strong> <code>(10s + 5) / (s³ + 3s² + 12s + 5)</code></li>
                            <li><strong className="text-text-primary">T_PID(s):</strong> <code>(2s² + 10s + 5) / (s³ + 5s² + 12s + 5)</code></li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 3: Multi-System Transient Response Plotting
                        </h4>
                        <p className="text-sm text-text-secondary">
                            <code>step(T_P, T_PI, T_PID)</code> evaluates and superimposes the unit step responses of all three configurations onto a single Cartesian axis, facilitating instantaneous visual comparison of rise times, peak amplitudes, and settling times.
                        </p>
                    </div>

                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 4: Quantitative Parameter Extraction
                        </h4>
                        <p className="text-sm text-text-secondary">
                            <code>stepinfo()</code> inspects each closed-loop system and extracts exact numerical figures for <code>RiseTime</code>, <code>SettlingTime</code>, <code>Overshoot</code>, <code>Peak</code>, and <code>PeakTime</code>.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="my-10 border-border" />

            {/* Performance Comparison Table */}
            <section className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    4. Performance Comparison Summary
                </h3>

                <div className="overflow-x-auto border border-border rounded-lg bg-surface/30">
                    <table className="w-full text-left text-sm font-sans border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-surface/70 text-text-primary">
                                <th className="p-3 font-semibold">Controller</th>
                                <th className="p-3 font-semibold">Rise Time (t_r)</th>
                                <th className="p-3 font-semibold">Overshoot (%OS)</th>
                                <th className="p-3 font-semibold">Settling Time (t_s)</th>
                                <th className="p-3 font-semibold">Steady-State Error (e_ss)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-text-secondary font-mono text-xs sm:text-sm">
                            <tr className="hover:bg-surface/50 transition-colors">
                                <td className="p-3 font-semibold text-text-primary">P Controller</td>
                                <td className="p-3">Fast</td>
                                <td className="p-3">Moderate (~28%)</td>
                                <td className="p-3">Moderate</td>
                                <td className="p-3 text-red-400 font-semibold">Non-zero (~16.7%)</td>
                            </tr>
                            <tr className="hover:bg-surface/50 transition-colors">
                                <td className="p-3 font-semibold text-text-primary">PI Controller</td>
                                <td className="p-3">Moderate</td>
                                <td className="p-3 text-amber-400">High (~45%)</td>
                                <td className="p-3">Longer (oscillations)</td>
                                <td className="p-3 text-emerald-400 font-semibold">Zero (0%)</td>
                            </tr>
                            <tr className="hover:bg-surface/50 transition-colors">
                                <td className="p-3 font-semibold text-text-primary">PID Controller</td>
                                <td className="p-3 text-emerald-400 font-semibold">Fastest</td>
                                <td className="p-3 text-emerald-400 font-semibold">Low / Suppressed</td>
                                <td className="p-3 text-emerald-400 font-semibold">Fastest</td>
                                <td className="p-3 text-emerald-400 font-semibold">Zero (0%)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="space-y-3 text-base text-text-secondary">
                    <p>
                        <strong className="text-text-primary">Key Takeaways:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                        <li>
                            <span className="text-text-primary font-medium">Proportional Gain (K_p):</span> Speeds up the reaction, but cannot eliminate steady-state error on its own for this plant without infinite loop gain.
                        </li>
                        <li>
                            <span className="text-text-primary font-medium">Integral Gain (K_i):</span> Integrates the tracking error over time, guaranteeing zero steady-state error ($e_{ss} = 0$), but introduces phase lag that can destabilize the system or cause large overshoot.
                        </li>
                        <li>
                            <span className="text-text-primary font-medium">Derivative Gain (K_d):</span> Anticipates error rates, acting like a dynamic brake to damp oscillations, curtail overshoot, and yield rapid settling time.
                        </li>
                    </ul>
                </div>
            </section>
        </article>
    );
}
