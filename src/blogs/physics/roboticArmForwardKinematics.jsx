import React from "react";
import { CodeBlock } from "../../components/CodeBlock";

export const metadata = {
    title: "3-DOF Robotic Arm Forward Kinematics & Trajectory Simulation in MATLAB",
    slug: "matlab-3dof-robotic-arm-forward-kinematics",
    date: "2026-11-23",
    category: "Physics",
    readTime: "5 min",
    summary:
        "A complete 3D kinematic simulation of a 3-DOF articulated robotic arm in MATLAB using Denavit-Hartenberg (DH) parameters, featuring homogeneous transformation matrices and real-time end-effector trajectory animation.",
};

const matlabCode = `clear; clc; close all;

%% DH Parameters
% [d, a, alpha]
dh = [
    6.0, 0.0,  pi/2;
    0.0, 4.0, -pi/2;
    0.0, 6.0,  0.0
    ];

%% Simulation
num_steps = 150;
t = linspace(0, 2*pi, num_steps);

% Store end-effector path
path = zeros(3, num_steps);

figure('Color','w','Position',[100 100 800 600]);

for k = 1:num_steps

    %% Joint Angles
    theta = [
        pi/4 * sin(t(k));
        pi/3 * cos(t(k));
        pi/4 * sin(t(k)/2)
        ];

    %% Forward Kinematics
    pos = forwardKinematics(dh, theta);

    %% Store End-Effector Position
    path(:,k) = pos(:,end);

    %% Clear previous frame
    clf;

    %% Plot Robotic Arm
    plot3(pos(1,:), pos(2,:), pos(3,:), '-o', ...
        'LineWidth', 4, ...
        'MarkerSize', 9, ...
        'MarkerFaceColor', 'r');

    hold on;

    %% Plot End-Effector Path
    plot3(path(1,1:k), ...
          path(2,1:k), ...
          path(3,1:k), ...
          'b-', ...
          'LineWidth', 2.5);

    %% Mark Current End-Effector
    plot3(pos(1,end), ...
          pos(2,end), ...
          pos(3,end), ...
          'bo', ...
          'MarkerSize', 8, ...
          'MarkerFaceColor', 'b');

    %% Plot Settings
    grid on;
    axis equal;
    axis([-16 16 -16 16 0 20]);
    view(45,30);

    xlabel('X');
    ylabel('Y');
    zlabel('Z');

    title(sprintf('3-DOF Robotic Arm with End-Effector Path - Step %d / %d', ...
        k, num_steps));

    legend('Robotic Arm', 'End-Effector Path', 'Current End-Effector', ...
        'Location', 'best');

    drawnow;
end

%% Forward Kinematics
function pos = forwardKinematics(dh, theta)

n = size(dh,1);

T = eye(4);
pos = zeros(3,n+1);

for i = 1:n

    d = dh(i,1);
    a = dh(i,2);
    alpha = dh(i,3);
    th = theta(i);

    A = [
        cos(th), -sin(th)*cos(alpha),  sin(th)*sin(alpha), a*cos(th);
        sin(th),  cos(th)*cos(alpha), -cos(th)*sin(alpha), a*sin(th);
        0,        sin(alpha),          cos(alpha),          d;
        0,        0,                    0,                   1
        ];

    T = T*A;

    pos(:,i+1) = T(1:3,4);

end

end`;

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            {/* Overview */}
            <section className="space-y-4 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <p>
                    Forward Kinematics (FK) is the cornerstone of robotic manipulator modeling and control. 
                    Given the geometric structure of a robot and its instantaneous joint variables, forward kinematics 
                    solves the geometric problem: <em>Where is the end-effector located in 3D Cartesian space?</em>
                </p>
                <p>
                    This MATLAB implementation constructs a continuous 3D dynamic visualization of a{" "}
                    <strong className="text-text-primary">3-Degree-of-Freedom (3-DOF) articulated robotic arm</strong>. 
                    Using the standard <strong className="text-text-primary">Denavit-Hartenberg (DH) convention</strong>, 
                    the script computes homogeneous transformation matrices for each link in real-time, animating the 
                    arm's physical posture alongside the sweeping spatial path traversed by its end-effector.
                </p>
            </section>

            <hr className="my-10 border-border" />

            {/* DH Parameters & Mathematics */}
            <section className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    1. Denavit-Hartenberg (DH) Representation
                </h3>

                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                    The DH convention standardizes coordinate frame attachments across consecutive joints using 
                    four geometric link parameters:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                    <div className="border border-border bg-surface/40 rounded-lg p-4">
                        <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">Offset (d_i)</div>
                        <p className="text-xs sm:text-sm text-text-secondary">Distance along previous z-axis (z_{'{i-1}'}) to the common normal.</p>
                    </div>
                    <div className="border border-border bg-surface/40 rounded-lg p-4">
                        <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">Angle (theta_i)</div>
                        <p className="text-xs sm:text-sm text-text-secondary">Rotation about previous z-axis (z_{'{i-1}'}) needed to align x-axes.</p>
                    </div>
                    <div className="border border-border bg-surface/40 rounded-lg p-4">
                        <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">Length (a_i)</div>
                        <p className="text-xs sm:text-sm text-text-secondary">Length of common normal along current x-axis (x_i).</p>
                    </div>
                    <div className="border border-border bg-surface/40 rounded-lg p-4">
                        <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-1">Twist (alpha_i)</div>
                        <p className="text-xs sm:text-sm text-text-secondary">Angle from z_{'{i-1}'} to z_i measured about x_i.</p>
                    </div>
                </div>

                <div className="overflow-x-auto border border-border rounded-lg bg-surface/30">
                    <table className="w-full text-left text-sm font-sans border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-surface/70 text-text-primary">
                                <th className="p-3 font-semibold">Link (i)</th>
                                <th className="p-3 font-semibold">Link Offset d_i</th>
                                <th className="p-3 font-semibold">Link Length a_i</th>
                                <th className="p-3 font-semibold">Twist Angle α_i</th>
                                <th className="p-3 font-semibold">Joint Angle θ_i(t)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-text-secondary font-mono text-xs sm:text-sm">
                            <tr className="hover:bg-surface/50 transition-colors">
                                <td className="p-3 font-semibold text-text-primary">Link 1 (Base / Waist)</td>
                                <td className="p-3">6.0</td>
                                <td className="p-3">0.0</td>
                                <td className="p-3">π/2 (+90°)</td>
                                <td className="p-3 text-amber-500">θ₁(t) = (π/4)·sin(t)</td>
                            </tr>
                            <tr className="hover:bg-surface/50 transition-colors">
                                <td className="p-3 font-semibold text-text-primary">Link 2 (Shoulder / Arm)</td>
                                <td className="p-3">0.0</td>
                                <td className="p-3">4.0</td>
                                <td className="p-3">-π/2 (-90°)</td>
                                <td className="p-3 text-amber-500">θ₂(t) = (π/3)·cos(t)</td>
                            </tr>
                            <tr className="hover:bg-surface/50 transition-colors">
                                <td className="p-3 font-semibold text-text-primary">Link 3 (Elbow / Forearm)</td>
                                <td className="p-3">0.0</td>
                                <td className="p-3">6.0</td>
                                <td className="p-3">0.0 (0°)</td>
                                <td className="p-3 text-amber-500">θ₃(t) = (π/4)·sin(t/2)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                    Each link's relative pose is captured by a 4×4 homogeneous transformation matrix:
                </p>

                <div className="bg-surface/60 border border-border rounded-lg p-4 font-mono text-xs sm:text-sm text-text-primary overflow-x-auto leading-relaxed">
                    A_i = [<br />
                    &nbsp;&nbsp;cos(θ_i)&nbsp;&nbsp;-sin(θ_i)·cos(α_i)&nbsp;&nbsp;&nbsp;sin(θ_i)·sin(α_i)&nbsp;&nbsp;a_i·cos(θ_i);<br />
                    &nbsp;&nbsp;sin(θ_i)&nbsp;&nbsp;&nbsp;cos(θ_i)·cos(α_i)&nbsp;&nbsp;-cos(θ_i)·sin(α_i)&nbsp;&nbsp;a_i·sin(θ_i);<br />
                    &nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sin(α_i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cos(α_i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d_i;<br />
                    &nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1<br />
                    ]
                </div>
            </section>

            <hr className="my-10 border-border" />

            {/* MATLAB Code Section */}
            <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                        2. Complete MATLAB Simulation Script
                    </h3>
                    <span className="text-xs font-mono text-text-secondary">
                        Click "Copy" in the top-right corner to copy to clipboard
                    </span>
                </div>

                <p className="text-base text-text-secondary">
                    Copy and run this script in MATLAB. It opens an interactive 3D figure window and plays the 150-frame animation:
                </p>

                <CodeBlock code={matlabCode} language="matlab" />
            </section>

            <hr className="my-10 border-border" />

            {/* Architectural Breakdown */}
            <section className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    3. Code Architecture & Execution Flow
                </h3>

                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-text-secondary">
                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 1: Recursive Forward Kinematic Engine
                        </h4>
                        <p className="text-sm text-text-secondary">
                            The local function <code>forwardKinematics(dh, theta)</code> initialises an identity transform <code>T = eye(4)</code> and an origin vector <code>pos(:,1) = [0;0;0]</code>. At each iteration, it builds the individual 4×4 DH matrix <code>A</code>, post-multiplies <code>T = T * A</code>, and stores the translational column <code>T(1:3,4)</code> as the Cartesian position of joint <code>i+1</code>.
                        </p>
                    </div>

                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 2: Harmonic Joint Angle Trajectory Generation
                        </h4>
                        <p className="text-sm text-text-secondary">
                            Rather than static posture evaluation, the simulation evaluates 150 discrete steps along a parameter vector <code>t = linspace(0, 2*pi, 150)</code>. Combining sine and cosine functions across different frequencies produces non-linear, multi-dimensional periodic spatial movement.
                        </p>
                    </div>

                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 3: 3D Animation & Real-Time Path Rendering
                        </h4>
                        <p className="text-sm text-text-secondary">
                            At each frame, <code>clf</code> clears the canvas while maintaining the persistent figure handle. The robot arm links are plotted with red circular nodes (<code>-o</code>), the cumulative path history is drawn with a solid blue line (<code>b-</code>), and the instantaneous end-effector position is highlighted.
                        </p>
                    </div>

                    <div className="border-l-2 border-amber-500/80 pl-4 space-y-1">
                        <h4 className="font-semibold text-text-primary text-base">
                            Step 4: Viewport & Perspective Lock
                        </h4>
                        <p className="text-sm text-text-secondary">
                            Setting <code>axis equal</code> ensures true 1:1:1 spatial aspect ratio without distortion, while <code>axis([-16 16 -16 16 0 20])</code> and <code>view(45, 30)</code> fix the isometric viewpoint throughout all 150 steps. <code>drawnow</code> flushes the graphics buffer to ensure smooth animation.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="my-10 border-border" />

            {/* Practical Robotics Notes */}
            <section className="space-y-4 text-base text-text-secondary">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    4. Practical Engineering Takeaways
                </h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                    <li>
                        <strong className="text-text-primary">Workspace Boundary:</strong> The total reachable workspace radius is bounded by the sum of horizontal link lengths ($a_2 + a_3 = 4 + 6 = 10\text{ units}$) offset by the vertical base pedestal ($d_1 = 6\text{ units}$).
                    </li>
                    <li>
                        <strong className="text-text-primary">Coordinate Origin:</strong> <code>pos(:,1)</code> represents the base mounting point $(0,0,0)$, followed by the shoulder joint, elbow joint, and finally the tool center point (TCP).
                    </li>
                    <li>
                        <strong className="text-text-primary">Extensibility:</strong> This formulation easily scales to 6-DOF industrial robot arms (e.g., PUMA 560 or UR5) simply by extending the rows of the <code>dh</code> matrix and passing corresponding 6-element joint vectors.
                    </li>
                </ul>
            </section>
        </article>
    );
}
