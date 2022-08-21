import React, {useEffect} from 'react'

export default function fetchSheet() {
 
     const fetchAPI = async () => {
   fetch('https://spreadsheets.google.com/feeds/cells/13cKF3iZeIL0jJXxp1FoAB6-1Jabq0M5_TnIxRMikIuI/1/public/full?alt=json')
  .then((response) => response.json())
  .then((data) => console.log(data));
    }

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {

    fetchAPI();
} , []);



  return (
    <div>fetchSheet</div>
  )
}
