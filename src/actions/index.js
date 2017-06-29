import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const ERROR_GET_COUNTRIES = "ERROR_GET_COUNTRIES";

export const getCountries = () => 
{
    console.log("oko")
    return (dispatch) => 
    {
        axios("http://api.population.io:80/1.0/countries")
            .then(
                (response) => {
                    console.log(response.data.countries);
                    dispatch(
                        {
                            type: GET_COUNTRIES,
                            payload:response.data.countries
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                    dispatch(
                        {
                            type: ERROR_GET_COUNTRIES,
                            error: error.response.data.detail
                        }
                    )
                }
            );
    }
    
};