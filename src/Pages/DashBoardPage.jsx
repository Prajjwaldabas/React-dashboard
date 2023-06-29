import React from 'react'
import './DashBoard.css'
import dashboard_icon from '../Images/dashboard_icon.png'
import transaction_icon from '../Images/transaction_icon.png'
import Pinkdot from '../Images/Ellipse 3.png'
import Greendot from '../Images/Ellipse 4.png'
import schedule_icon from '../Images/schedule_icon.png'
import downarrow from '../Images/downArrow.png'
import users_icon from '../Images/user_icon.png'
import settings_icon from '../Images/setting_icon.png'
import search_icon from '../Images/Search icon.png'
import bell_icon from '../Images/Vector.png'
import profile_icon from '../Images/profile.png'
import revenue_icon from '../Images/revenue_icon.png'
import like_icon from '../Images/like_icon.png'
import people_icon from '../Images/people_icon.png'
import totaltransaction_icon from '../Images/total_transactions_icon.png'
import pinkline from '../Images/line_chart_1.png'
import greenline from '../Images/line_chart_2.png'
import greenCircle from '../Images/green_piece.png'
import pinkCircle from '../Images/pink_piece.png'
import yellowCircle from '../Images/yellow_piece.png'
import yellowDot from '../Images/Ellipse 6.png'
import rightArrow from '../Images/rightArrow.png'

const DashBoardPage = () => {
  return (
    <div className='DashboardContainer'>


<div className='col1'>

<div className='col1_row1' >
<div className='Board'>
<p>Board.</p>
</div>

<div className='BoardItems'>

<div className='items'> <img src={dashboard_icon} alt="" /><p id="p1">Dashboard</p></div>
<div className='items'><img src={transaction_icon} alt="" /><p>Transactions</p></div>
<div className='items'> <img src={schedule_icon} alt="" /> <p>Schedules</p></div>
<div className='items'><img src={users_icon} alt="" /> <p>Users</p> </div>
<div className='items'><img src={settings_icon} alt="" /> <p>Settings</p></div>

</div>
</div>

<div className='col1_row2'>
<div className='help'>
<p>Help</p>
<p>
    Contact Us
</p>
</div>


</div>
</div>

<div className='col2'>

<div className='col2_row1'>
    
<div className='col2_row1_left'> <p>Dashboard</p></div>
<div className='col2_row1_right'> 

<div className='search'> <input type="text" placeholder='Search...'/>

<img src={search_icon} alt="" />
</div>

<div id="bell_icon">

<img src={bell_icon} alt="" />
</div>
<div id="profile_icon">
<img src={profile_icon} alt="" />
</div>
</div>


</div>

<div  className='col2_row2'>
    <div className='col2_row2_boxes' id="box1">

<img src={revenue_icon} alt="" />
<div  className='innerbox'>
<p>Total revenue</p>
<h3>$2,129,430</h3>
  
</div>


    </div>
    <div className='col2_row2_boxes' id="box2">

    <img src={totaltransaction_icon} alt="" />
    <div className='innerbox'>
    <p>Total Transactions</p>
<h3  >1,520</h3>
    </div>


    </div>

    <div className='col2_row2_boxes' id="box3">
    <img src={like_icon} alt="" />

    <div  className='innerbox'>
    <p>Total Likes</p>
<h3>9,721</h3>
    </div>

    </div>

    <div className='col2_row2_boxes' id="box4">
<img src={people_icon} alt="" />

<div  className='innerbox'>
<p>Total Users</p>
<h3>892</h3>
</div>

    </div>

</div>




<div className='col2_row3'>
    

<div className='col2_row3_row1'>

    <div className='col2_row3_row1_left'>
        <h3>Activities</h3>
        <div className='downArrow'><p>May-June 2021</p>  
        <img src={downarrow} alt="" />
        
        </div>
    </div>

    <div className='col2_row3_row1_right'>

<div className='guest'>
<img src={Pinkdot} alt="" />
<p>Guest</p>
</div>

<div className='User'>
<img src={Greendot} alt="" />
<p>User</p>
</div>

    </div>

</div>


<div className='col2_row3_row2' >


<div className='lineContainer'>
    <p>500</p>
    <div className='line'></div>
</div>
<div className='lineContainer'>
    <p>400</p>
    <div className='line'></div>
</div>
<div className='lineContainer'>
    <p>300</p>
    <div className='line'></div>
</div>
<div className='lineContainer'>
    <p>200</p>
    <div className='line'></div>
</div>
<div className='lineContainer'>
    <p>100</p>
    <div className='line'></div>
</div>
<div className='lineContainer'>
    <p>0</p>
    <div className='line'></div>
</div>



</div>

<div className='pinkline'>
<img src={pinkline} alt="" />
</div>
<div className='greenline'>
<img src={greenline} alt="" />
</div>

<div className='weekContainer'>

<div><p>Week 1</p></div>
   <div> <p>Week 2</p></div> 
<div>
<p>Week 3</p>
</div>
<div><p>Week 4</p> </div>


</div>



</div>

<div className='col2_row4'>
    
<div className='col2_row4_col1'>

<div className='col2_row4_col1_row1'>

<div className='topProducts'>
    <p>Top Products</p>
</div>

<div className='col2_row4_col1_row1_date'>
    <p>May-June 2021</p>
    <img src={downarrow} alt="" />
</div>

</div>

<div className='col2_row4_col1_row2'>

<div className='col2_row4_col1_row2_left'>

<div className='greenCircle'><img src={greenCircle} alt="" /></div>
<div className='pinkCircle'><img src={pinkCircle} alt="" /></div>
<div className='yellowCircle'><img src={yellowCircle} alt="" /></div>

</div>

<div className='col2_row4_col1_row2_right'>

<div className='right_items'>
<div className='item'><img src={Greendot} alt="" />
<div className='itemHeading'>
    <div className='heading'>  <p>Basic Tees</p></div>
    <div className='prcnt'>
    <p>55%</p>
</div>
</div>

</div>
<div className='item'><img src={yellowDot} alt="" />
<div className='itemHeading'>
    
    <div className='heading'><p>Custom Short Pants</p></div>
    <div className='prcnt'>
    <p>31%</p>
</div>
</div>

</div>
<div className='item'><img src={Pinkdot} alt="" />
<div className='itemHeading'>
    <div className='heading'>    <p>Super Hoodies</p></div>
    <div className='prcnt'>
    <p>14%</p>
</div>
</div>

</div>

</div>



</div>

</div>
</div>

<div className='col2_row4_col2'>


<div className='col2_row4_col2_row1'>

    <div className='TodaySchedule'><p>Today's Schedule</p></div>

    <div className='SeeAll'> <p>See All </p>
    <img src={rightArrow} alt="" />
    </div>

</div>


<div className='col2_row4_col2_row2'>

    <div className='col2_row4_col2_row2_row1'>
        <div className='col2_row4_col2_row2_left' id="color_green"></div>
        <div className='col2_row4_col2_row2_right'> 
        
        <div className='col2_row4_col2_row2_right_heading'> <p>Meeting with suppliers from Kuta Bali</p></div>

        <p>14.00-15.00</p>
        <p>at Sunset Road, Kuta, Bali</p>
        </div>
    </div>
    <div className='col2_row4_col2_row2_row2'>
        <div className='col2_row4_col2_row2_left' id="color_blue"></div>
        <div className='col2_row4_col2_row2_right'> 
        
        <div className='col2_row4_col2_row2_right_heading'> <p>Check operation at Giga Factory 1</p></div>

        <p>18.00-20.00</p>
        <p>at Central Jakarta </p>
        </div>
    </div>



</div>

</div>



</div>


</div>



    </div>
  )
}

export default DashBoardPage