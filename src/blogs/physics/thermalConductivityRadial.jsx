import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Determination of Thermal Conductivity by Radial Heat Conduction Through a Cylindrical Powder Column",
    slug: "thermal-conductivity-radial-heat-conduction",
    date: "2026-10-29",
    category: "Physics",
    readTime: "3 min",
    summary:
        "A MATLAB script that determines the thermal conductivity of a cylindrical powder column using radial heat conduction data. Calculates experimental conductivity and percentage error against a theoretical value across multiple heat-flow runs, exports results to Excel, and plots conductivity versus mean temperature.",
};

const matlabCode = `% EXPERIMENT: DETERMINATION OF THERMAL CONDUCTIVITY
% BY RADIAL HEAT CONDUCTION THROUGH A CYLINDRICAL POWDER COLUMN

clc;
clear;
close all;

%% EXPERIMENTAL DATA

T1 = [85 90 95 100 105];      % Inner temperature (°C)
T2 = [40 43 46 49 52];        % Outer temperature (°C)
Q  = [12 14 16 18 20];        % Heat flow rate (W)

r1 = 0.015;                   % Inner radius (m)
r2 = 0.045;                   % Outer radius (m)
L  = 0.05;                    % Length (m)

k_theoretical = 0.12;         % Theoretical conductivity (W/m-K)

%% CALCULATIONS

n = length(T1);

Tm = (T1 + T2) / 2;

k_exp = zeros(1,n);
error_percent = zeros(1,n);

for i = 1:n

    k_exp(i) = (Q(i) * log(r2/r1)) / ...
        (2*pi*L*(T1(i)-T2(i)));

    error_percent(i) = abs((k_theoretical-k_exp(i)) ...
        / k_theoretical)*100;

end

%% RESULTS TABLE

Results = table(T1', T2', Tm', Q', k_exp', error_percent', ...
    'VariableNames', {'InnerTemp_C', ...
    'OuterTemp_C', ...
    'MeanTemp_C', ...
    'HeatFlow_W', ...
    'ThermalConductivity_W_mK', ...
    'PercentageError'});

disp(' ');
disp('EXPERIMENTAL RESULTS');
disp(Results);

%% EXPORT RESULTS TO EXCEL

filename = 'Thermal_Conductivity_Results.xlsx';

writetable(Results, filename);

fprintf('\\nResults saved to %s\\n', filename);

%% PLOT GRAPH

figure('Color','w');

plot(Tm, k_exp, '-o', ...
    'LineWidth', 2, ...
    'MarkerSize', 8);

xlabel('Mean Temperature (°C)');
ylabel('Thermal Conductivity (W/m-K)');

title('Variation of Thermal Conductivity with Mean Temperature');

grid on;
box on;

%% SAVE GRAPH

exportgraphics(gcf, 'Thermal_Conductivity_Plot.png', ...
    'Resolution', 300);`;

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <section className="space-y-4 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <p>
                    This MATLAB script determines the{" "}
                    <strong className="text-text-primary">thermal conductivity</strong> of a
                    cylindrical powder column from radial heat conduction measurements. It
                    applies the hollow-cylinder conduction formula across five experimental
                    runs, computes percentage error against a theoretical reference value,
                    exports the results to an Excel file, and plots how conductivity varies
                    with mean temperature.
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
