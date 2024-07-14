import React, { useState, useEffect } from 'react';
import jsonData from './data.json';


function Accounts({searchData}) {

    const [accountsData, setAccountsData] = useState([]);

    useEffect(() => {

       document.title = 'job listing'

        const filteredData = searchData ?
          jsonData.filter(element => {
            const toolsMatch = element.tools.some(tool => searchData.includes(tool));
            const languagesMatch = element.languages.some(language => searchData.includes(language));
            return toolsMatch || languagesMatch;
          }) :
          jsonData;
          
        setAccountsData(filteredData);
      }, [searchData]);


    return (
        <div>
            {accountsData.map((item, index) => (
                <div className='account-container' key={index}>
                    <div>
                        <img src={`./base/${item.logo}`} alt="image"/>
                    </div>
                    <div className='description'>
                        <span>{item.company}</span>
                        {item.new && <span className='tag'>new</span>}
                        {item.featured && <span className='tag'>featured</span>}
                        <p className='job-title'>{item.position}</p>
                        <p className='details'>{`${item.postedAt} . ${item.contract} . ${item.location}`}</p>
                    </div>
                    <div className='skill'>
                        {item.languages.map((language, langIndex) => (
                            <span key={langIndex}> {language} </span>
                        ))}
                        {item.tools.map((tool, toolIndex) => (
                            <span key={toolIndex}> {tool} </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accounts;
