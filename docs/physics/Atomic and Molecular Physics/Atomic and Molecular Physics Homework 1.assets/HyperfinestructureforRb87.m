% 参数
A = 3.417341305452145; % GHz * h
g_J = 2.00233113;
g_I = -0.0009951414;
mu_B = 0.001399624; % GHz/G * h
B_z = 0.001; % G

% 基矢状态
states = [
    -0.5, -1.5;
    -0.5, -0.5;
    -0.5,  0.5;
    -0.5,  1.5;
     0.5, -1.5;
     0.5, -0.5;
     0.5,  0.5;
     0.5,  1.5
];

%哈密顿量
N = 8;
H = zeros(N);

for i = 1:N
    mJ_i = states(i,1);
    mI_i = states(i,2);
    % 对角元
    H(i,i) = A * mJ_i * mI_i + mu_B * B_z * (g_J * mJ_i + g_I * mI_i);
    
    for j = i+1:N
        mJ_j = states(j,1);
        mI_j = states(j,2);
        
        % 检查非对角元条件
        if mJ_i - mJ_j == -1 && mI_i - mI_j == 1 % I_+ J_- 情况
            factor = sqrt( (1/2)*(3/2) - mJ_j*(mJ_j-1) ) * sqrt( (3/2)*(5/2) - mI_j*(mI_j+1) );
            H(i,j) = 1/2 * A * factor;
            H(j,i) = H(i,j);
        elseif mJ_i - mJ_j == 1 && mI_i - mI_j == -1 % I_- J_+ 情况
            factor = sqrt( (1/2)*(3/2) - mJ_j*(mJ_j+1) ) * sqrt( (3/2)*(5/2) - mI_j*(mI_j-1) );
            H(i,j) = 1/2 * A * factor;
            H(j,i) = H(i,j);
        end
    end
end

%对角化
[V, D] = eig(H);
eigenvalues = diag(D);
[eigenvalues_sorted, sort_idx] = sort(eigenvalues);
eigenvectors_sorted = V(:, sort_idx);