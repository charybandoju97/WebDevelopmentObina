import './JobOverview.css';

function JobOverview({datePosted,locationType,offeredSalary,expirationDate})
{
   return <div className='JobOverviewContainer'>
          <h3>Job Overview</h3>
          <div className='JobOverviewSubContainer'>
            <div className='JobText'>
                <h4>Date Posted</h4>
                <h5>{datePosted}</h5>
            </div>
            <div className='JobText'>
                <h4>Location</h4>
                <h5>{locationType}</h5>
            </div>
            <div className='JobText'>
                <h4>Offered Salary</h4>
                <h5>{offeredSalary}</h5>
            </div>
            <div className='JobText'>
                <h4>Expiration date</h4>
                <h5>{expirationDate}</h5>
            </div>
          </div>
   </div>
}

export default JobOverview;