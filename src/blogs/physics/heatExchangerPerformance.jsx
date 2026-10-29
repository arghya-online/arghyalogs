import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Heat Exchanger Performance Analysis",
    slug: "heat-exchanger-performance-analysis",
    date: "2026-10-29",
    category: "Physics",
    readTime: "3 min",
    summary:
        "A MATLAB script that calculates heat exchanger effectiveness using the NTU method, determines outlet temperatures for both hot and cold streams, and solves for the required heat exchanger area to reach a target cold-side outlet temperature.",
};

const matlabCode = `clc;
clear;
close all;

mh = 2.0;
mc = 1.5;

cph = 4180;
cpc = 4180;

Thi = 90;
Tci = 25;

U = 800;
A = 100;

Ch = mh * cph;
Cc = mc * cpc;

Cmin = min(Ch, Cc);
Cmax = max(Ch, Cc);

Cr = Cmin / Cmax;

NTU = U * A / Cmin;

if Cr == 1
    eff = NTU / (1 + NTU);
else
    eff = (1 - exp(-NTU * (1 - Cr))) / ...
          (1 - Cr * exp(-NTU * (1 - Cr)));
end

Q = eff * Cmin * (Thi - Tci);

Tho = Thi - Q / Ch;
Tco = Tci + Q / Cc;

fprintf('Ch = %.2f W/K\\n', Ch);
fprintf('Cc = %.2f W/K\\n', Cc);
fprintf('Cmin = %.2f W/K\\n', Cmin);
fprintf('Cmax = %.2f W/K\\n', Cmax);
fprintf('Cr = %.4f\\n', Cr);
fprintf('NTU = %.4f\\n', NTU);
fprintf('Effectiveness = %.4f\\n', eff);
fprintf('Heat transfer rate = %.3f kW\\n', Q / 1000);
fprintf('Hot outlet temperature = %.2f C\\n', Tho);
fprintf('Cold outlet temperature = %.2f C\\n', Tco);


% PART B

Tco_target = 60;

Q_req = Cc * (Tco_target - Tci);

eff_req = Q_req / (Cmin * (Thi - Tci));

if Cr == 1
    NTU_req = eff_req / (1 - eff_req);
else
    NTU_req = -log((1 - eff_req) / ...
             (1 - eff_req * Cr)) / (1 - Cr);
end

UA_req = NTU_req * Cmin;
A_req = UA_req / U;

fprintf('\\nPART B\\n\\n');
fprintf('Target Tco = %.2f C\\n', Tco_target);
fprintf('Required heat transfer rate = %.3f kW\\n', Q_req / 1000);
fprintf('Required effectiveness = %.4f\\n', eff_req);
fprintf('Required NTU = %.4f\\n', NTU_req);
fprintf('Required UA = %.2f W/K\\n', UA_req);
fprintf('Required area = %.4f m^2\\n', A_req);


A_vals = linspace(0.1, 50, 400);
NTU_vals = (U * A_vals) ./ Cmin;

eff_vals = zeros(size(NTU_vals));

for k = 1:numel(NTU_vals)

    NTU = NTU_vals(k);

    if Cr == 1
        eff_vals(k) = NTU / (1 + NTU);
    else
        eff_vals(k) = (1 - exp(-NTU * (1 - Cr))) / ...
                      (1 - Cr * exp(-NTU * (1 - Cr)));
    end

end

Q_vals = eff_vals .* Cmin .* (Thi - Tci);

Tho_vals = Thi - Q_vals / Ch;
Tco_vals = Tci + Q_vals / Cc;


figure;
plot(A_vals, Tco_vals, 'b-', 'LineWidth', 1.5);
hold on;
yline(Tco_target, '--', 'LineWidth', 1.2);
xlabel('Heat exchanger area A (m^2)');
ylabel('Cold outlet temperature Tco (°C)');
title('Cold outlet temperature vs. Heat exchanger area');
legend('T_{co}', 'Target T_{co}', 'Location', 'SouthEast');
grid on;


figure;
plot(A_vals, Tco_vals, 'b-', 'LineWidth', 1.5);
hold on;
plot(A_vals, Tho_vals, 'r-', 'LineWidth', 1.5);

yline(Tco_target, 'k--', 'LineWidth', 1.2);

if A_req >= min(A_vals) && A_req <= max(A_vals)
    plot(A_req, Tco_target, 'bo', ...
        'MarkerSize', 8, 'LineWidth', 1.5);

    plot(A_req, interp1(A_vals, Tho_vals, A_req), ...
        'ro', 'MarkerSize', 8, 'LineWidth', 1.5);
end

xlabel('Heat exchanger area A (m^2)');
ylabel('Outlet temperature (°C)');
title('Hot and Cold Outlet Temperatures vs. Heat Exchanger Area');

legend('Cold outlet temperature (Tco)', ...
    'Hot outlet temperature (Tho)', ...
    'Target cold outlet temperature', ...
    'Location', 'best');

grid on;
hold off;`;

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <section className="space-y-4 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <p>
                    This MATLAB script analyses a counterflow heat exchanger using the{" "}
                    <strong className="text-text-primary">NTU–Effectiveness method</strong>.
                    It calculates heat capacity rates, the number of transfer units, and
                    overall effectiveness for a given exchanger area. In Part B it reverses
                    the calculation to find the minimum area required to hit a target cold
                    outlet temperature, then plots both outlet temperatures across a range
                    of areas.
                </p>
            </section>

            <hr className="my-10 border-border" />

            <div className="relative group my-6">
                <pre className="overflow-x-auto bg-[#1e1e1e] p-4 rounded-lg text-sm text-[#d4d4d4] border border-border font-mono leading-relaxed">
                    <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10 opacity-50 text-xs uppercase tracking-widest text-[#808080]">
                        <span>matlab</span>
                    </div>
                    <code>{matlabCode}</code>
                </pre>
                <div className="absolute top-12 right-2 invisible group-hover:visible transition-all">
                    <CopyButton code={matlabCode} />
                </div>
            </div>
        </article>
    );
}
