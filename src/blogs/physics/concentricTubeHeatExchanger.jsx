import React from "react";
import { CopyButton } from "../../components/CopyButton";

export const metadata = {
    title: "Experimental Analysis of a Concentric Tube Water-to-Water Heat Exchanger Using MATLAB",
    slug: "concentric-tube-heat-exchanger-experimental-analysis",
    date: "2026-10-29",
    category: "Physics",
    readTime: "3 min",
    summary:
        "A MATLAB script for experimental analysis of a concentric tube water-to-water heat exchanger. Computes heat transfer rates, LMTD for counter-flow and parallel-flow configurations, overall heat transfer coefficient, and effectiveness–NTU analysis across multiple experimental runs.",
};

const matlabCode = `clc;
clear;
close all;

%% EXPERIMENTAL DATA

Run = [1; 2; 3];

mh = [0.05; 0.07; 0.09];       % Hot mass flow rate (kg/s)
mc = [0.08; 0.08; 0.08];       % Cold mass flow rate (kg/s)

Thi = [70; 70; 70];             % Hot inlet temperature (deg C)
Tho = [50; 53; 55.5];           % Hot outlet temperature (deg C)
Tci = [20; 20; 20];             % Cold inlet temperature (deg C)
Tco = [32; 34.5; 36];           % Cold outlet temperature (deg C)

cp = 4180;                       % Specific heat of water (J/kg K)

A = input('Enter heat transfer area A (m^2): ');

if ~isscalar(A) || ~isfinite(A) || A <= 0
    error('Heat transfer area must be a positive finite scalar.');
end

%% PART A: HEAT TRANSFER RATES

Qh = mh .* cp .* (Thi - Tho);   % Hot-side heat transfer rate (W)
Qc = mc .* cp .* (Tco - Tci);   % Cold-side heat transfer rate (W)

Qavg = (Qh + Qc) ./ 2;          % Average heat duty (W)

EnergyError = abs(Qh - Qc) ./ Qavg .* 100;

%% PART B: LMTD CALCULATIONS

% Counter-flow temperature differences
dT1_cf = Thi - Tco;
dT2_cf = Tho - Tci;

LMTD_cf = calcLMTD(dT1_cf, dT2_cf);

% Parallel-flow temperature differences
dT1_pf = Thi - Tci;
dT2_pf = Tho - Tco;

LMTD_pf = calcLMTD(dT1_pf, dT2_pf);

%% PART C: OVERALL HEAT TRANSFER COEFFICIENT

U_cf = Qavg ./ (A .* LMTD_cf);
U_pf = Qavg ./ (A .* LMTD_pf);

%% PART D: CAPACITY RATES AND NTU PARAMETERS

Ch = mh .* cp;
Cc = mc .* cp;

Cmin = min(Ch, Cc);
Cmax = max(Ch, Cc);

Cr = Cmin ./ Cmax;

Qmax = Cmin .* (Thi - Tci);

% Experimental effectiveness
eff_exp = Qavg ./ Qmax;

% NTU for both configurations
NTU_cf = U_cf .* A ./ Cmin;
NTU_pf = U_pf .* A ./ Cmin;

% Theoretical effectiveness
eff_cf = effectivenessCounter(NTU_cf, Cr);
eff_pf = effectivenessParallel(NTU_pf, Cr);

%% PART E: CONSOLIDATED RESULTS TABLE

Results = table(Run, mh, mc, Qh, Qc, Qavg, EnergyError, ...
    LMTD_cf, LMTD_pf, U_cf, U_pf, Ch, Cc, Cmin, Cmax, Cr, ...
    Qmax, eff_exp, NTU_cf, NTU_pf, eff_cf, eff_pf, ...
    'VariableNames', {'Run', 'mh_kg_s', 'mc_kg_s', ...
    'Qh_W', 'Qc_W', 'Qavg_W', 'EnergyError_pct', ...
    'LMTD_CF_K', 'LMTD_PF_K', 'U_CF_W_m2K', ...
    'U_PF_W_m2K', 'Ch_W_K', 'Cc_W_K', 'Cmin_W_K', ...
    'Cmax_W_K', 'Cr', 'Qmax_W', 'Effectiveness_Exp', ...
    'NTU_CF', 'NTU_PF', 'Effectiveness_CF', ...
    'Effectiveness_PF'});

disp(' ');
disp('===== HEAT EXCHANGER EXPERIMENTAL ANALYSIS =====');
disp(Results);

%% PART F: DISPLAY IMPORTANT RESULTS

fprintf('\\nHEAT TRANSFER RATES (W)\\n');
fprintf('Run       Qh          Qc          Qavg\\n');

for i = 1:length(Run)
    fprintf('%d       %8.2f    %8.2f    %8.2f\\n', ...
        Run(i), Qh(i), Qc(i), Qavg(i));
end

fprintf('\\nLMTD (K)\\n');
fprintf('Run       Counter-flow       Parallel-flow\\n');

for i = 1:length(Run)
    fprintf('%d          %8.3f           %8.3f\\n', ...
        Run(i), LMTD_cf(i), LMTD_pf(i));
end

fprintf('\\nOVERALL HEAT TRANSFER COEFFICIENT (W/m^2 K)\\n');
fprintf('Run       Counter-flow       Parallel-flow\\n');

for i = 1:length(Run)
    fprintf('%d          %8.3f           %8.3f\\n', ...
        Run(i), U_cf(i), U_pf(i));
end

%% PART G: VISUALIZATION (2 x 2 SUBPLOTS)

figure('Color', 'w', ...
       'Name', 'Heat Exchanger Experimental Analysis');

% Plot 1: Average heat duty vs hot mass flow rate
subplot(2, 2, 1);

plot(mh, Qavg / 1000, 'bo-', ...
    'LineWidth', 1.5, 'MarkerSize', 7);

xlabel('Hot mass flow rate, m_h (kg/s)');
ylabel('Average heat duty, Q_{avg} (kW)');
title('Heat Duty vs Hot Mass Flow Rate');
grid on;

% Plot 2: LMTD vs hot mass flow rate
subplot(2, 2, 2);

plot(mh, LMTD_cf, 'bo-', ...
    'LineWidth', 1.5, 'MarkerSize', 7);
hold on;

plot(mh, LMTD_pf, 'rs-', ...
    'LineWidth', 1.5, 'MarkerSize', 7);

xlabel('Hot mass flow rate, m_h (kg/s)');
ylabel('LMTD (K)');
title('LMTD Comparison');
legend('Counter-flow', 'Parallel-flow', ...
    'Location', 'best');
grid on;
hold off;

% Plot 3: Overall heat transfer coefficient
subplot(2, 2, 3);

plot(mh, U_cf, 'bo-', ...
    'LineWidth', 1.5, 'MarkerSize', 7);
hold on;

plot(mh, U_pf, 'rs-', ...
    'LineWidth', 1.5, 'MarkerSize', 7);

xlabel('Hot mass flow rate, m_h (kg/s)');
ylabel('Overall heat transfer coefficient, U (W/m^2 K)');
title('Overall Heat Transfer Coefficient');
legend('Counter-flow', 'Parallel-flow', ...
    'Location', 'best');
grid on;
hold off;

% Plot 4: Theoretical effectiveness vs NTU
subplot(2, 2, 4);

NTU_range = linspace(0.01, max([NTU_cf; NTU_pf]) * 1.2, 300);

Cr_mean = mean(Cr);

eff_range_cf = effectivenessCounter(NTU_range, Cr_mean);
eff_range_pf = effectivenessParallel(NTU_range, Cr_mean);

plot(NTU_range, eff_range_cf, 'b-', 'LineWidth', 1.5);
hold on;

plot(NTU_range, eff_range_pf, 'r-', 'LineWidth', 1.5);

plot(NTU_cf, eff_cf, 'bo', 'MarkerSize', 7);
plot(NTU_pf, eff_pf, 'rs', 'MarkerSize', 7);

xlabel('Number of Transfer Units, NTU');
ylabel('Theoretical effectiveness, \\epsilon');
title('Effectiveness vs NTU');
legend('Counter-flow', 'Parallel-flow', ...
    'Counter-flow runs', 'Parallel-flow runs', ...
    'Location', 'best');
grid on;
hold off;

sgtitle('Experimental Analysis of a Concentric Tube Heat Exchanger');

%% LOCAL FUNCTIONS

function L = calcLMTD(dT1, dT2)

    if any(dT1 <= 0) || any(dT2 <= 0)
        error('Temperature differences must be positive.');
    end

    L = zeros(size(dT1));

    for j = 1:numel(dT1)
        if abs(dT1(j) - dT2(j)) < 1e-10
            L(j) = dT1(j);
        else
            L(j) = (dT1(j) - dT2(j)) / ...
                log(dT1(j) / dT2(j));
        end
    end
end

function eff = effectivenessCounter(NTU, Cr)

    if abs(Cr - 1) < 1e-8
        eff = NTU ./ (1 + NTU);
    else
        eff = (1 - exp(-NTU .* (1 - Cr))) ./ ...
            (1 - Cr .* exp(-NTU .* (1 - Cr)));
    end
end

function eff = effectivenessParallel(NTU, Cr)

    eff = (1 - exp(-NTU .* (1 + Cr))) ./ (1 + Cr);
end`;

export default function BlogContent() {
    return (
        <article className="max-w-none mx-auto sm:px-6 text-text-primary">
            <section className="space-y-4 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
                <p>
                    This MATLAB script processes experimental data from a{" "}
                    <strong className="text-text-primary">concentric tube water-to-water heat exchanger</strong>{" "}
                    across three flow-rate runs. It computes hot- and cold-side heat transfer
                    rates, LMTD for both counter-flow and parallel-flow arrangements, the
                    overall heat transfer coefficient, and effectiveness–NTU values, then
                    produces a 2 × 2 subplot summary figure.
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
