import React from 'react';

function chatgpt({ weatherCondition }) {
    // Define a function to render the appropriate content based on weatherCondition
    function renderWeatherContent() {
        if (weatherCondition === 'clear') {
            return (
                <>
                    <i className="fas fa-sun"></i>
                    <p>Clear Weather</p>
                </>
            );
        } else if (weatherCondition === 'rain') {
            return (
                <>
                    <i className="fas fa-cloud-showers-heavy"></i>
                    <p>Rainy Weather</p>
                </>
            );
        } else if (weatherCondition === 'snow') {
            return (
                <>
                    <i className="fas fa-snowflake"></i>
                    <p>Snowy Weather</p>
                </>
            );
        } else {
            return (
                <>
                    <i class="bi bi-cloud-sleet-fill"></i>
                    <i className="fas fa-snowflake"></i>

                    <p>Unknown Weather</p>
                </>
            );
        }
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sleet-fill" viewBox="0 0 16 16">
                <path d="M2.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zM6.375 13.5a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 0 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm2.151 2.447a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 1 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 1 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm1.181-7.026a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z" />
            </svg>
            <h1>Weather Display</h1>
            <div>
                {renderWeatherContent()}
            </div>
        </div>
    );
}

export default chatgpt;
