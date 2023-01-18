phase_range = 0.05;


theta_range_normal_matching = [15, 139];
theta_range_rotated_matching = [90-theta_range_normal_matching(theta_range_normal_matching<90), 180-(theta_range_normal_matching(theta_range_normal_matching>90)-90)];

theta_range_rotated_discrimination = 15:2:29;
theta_range_normal_discrimination = 90 - (15:2:29);

lamda = 10;                             % wavelength (number of pixels per cycle)
sigma = 12;                             % gaussian standard deviation in pixels
trim = .005;                            % how much to trim gabor - 0 no trimming o 

imSize = 200;                           % image size: n X n
X = 1:imSize;                           % X is a vector from 1 to imageSize
X0 = (X / imSize) - .5;                 % rescale X -> -.5 to .5

for t = 1:length(theta_range_rotated_matching)
    theta = theta_range_rotated_matching(t);              % grating orientation
    theta_for_name = theta_range_normal_matching(t);
    for p = 1:length(phase_range)
        phase = phase_range(p);                 % phase (0 -> 1)

        sinX = sin(X0 * 2*pi);                  % convert to radians and do sine

        freq = imSize/lamda;                    % compute frequency from wavelength
        Xf = X0 * freq * 2*pi;                  % convert X to radians: 0 -> ( 2*pi * frequency)
        sinX = sin(Xf) ;                        % make new sinewave
        phaseRad = (phase * 2* pi);             % convert to radians: 0 -> 2*pi
        sinX = sin( Xf + phaseRad) ;            % make phase-shifted sinewave
        
        [Xm Ym] = meshgrid(X0, X0);             % 2D matrices

        Xf = Xm * freq * 2*pi;
        grating = sin( Xf + phaseRad);          % make 2D sinewave
        
        thetaRad = (theta / 360) * 2*pi;        % convert theta (orientation) to radians
        Xt = Xm * cos(thetaRad);                % compute proportion of Xm for given orientation
        Yt = Ym * sin(thetaRad);                % compute proportion of Ym for given orientation
        XYt = [ Xt + Yt ];                      % sum X and Y components
        XYf = XYt * freq * 2*pi;                % convert to radians and scale by frequency
        grating = sin( XYf + phaseRad);                   % make 2D sinewave
        
        s = sigma / imSize;                     % gaussian width as fraction of imageSize
        Xg = exp( -( ( (X0.^2) ) ./ (2* s^2) ));% formula for 1D gaussian
        Xg = normpdf(X0, 0, (20/imSize)); Xg = Xg/max(Xg);  % alternative using normalized probability function (stats toolbox)
        
        gauss = exp( -(((Xm.^2)+(Ym.^2)) ./ (2* s^2)) ); % formula for 2D gaussian
        
        gauss(gauss < trim) = 0;                 % trim around edges (for 8-bit colour displays)
        
        gabor = grating .* gauss;                % use .* dot-product
        gabor_final = (gabor + 1)./2;
        %fig1 = figure('units','normalized','outerposition',[0 0 1 1]);
        %imshow(gabor_final);
        
        filename = ['gabor_ori' num2str(theta_for_name) '_phase' num2str(phase) '.png'];
        display(filename);
        imwrite(gabor_final, filename);
    end
end