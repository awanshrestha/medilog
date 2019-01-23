
let image=document.querySelector('.image');
image.addEventListener('click',DisplayDiseases);
function DisplayDiseases(e)
{
    let x=e.offsetX;
    let y=e.offsetY;

    

    if((x>727 && y>457) || (x>676 && x<840 && y<454 && y>268) || (x>652 && x<673 && y>352 && y<420) )
    {
        //province 1
        
        let thisText=document.querySelector('.thisText');

        thisText.innerHTML=`<h1>Province 1</h1>
        <p class="province-intro">Province 1 is situated at eastern part of Nepal. This  region is divided into Mountains, Hill and Terai regions. Province stretches from the Terai in the south to the Himalayas in the north. It constitutes of one metropolitan, 46 municipalities and 90 rural municipalities in new federal context. Fourteen districts from previous administrative division (Eastern Development region) constitute of Province one. These districts are as follows: Bhojpur; Dhankuta; Ilam; Jhapa; Khotang; Morang; Okhaldhunga; Panchthar; Sankhuwasabha; Solukhumbu; Sunsari;Taplejung, Terhathum; Udaypur.</p>
        
        <p class="province-intro"> The total population is 4,534,943. The Fertility rate of this region is 2.3%, mortality rate under 5 is 36 per 1000, percent of children fully immunized is 79.4%. There are total of 705 health facilities in this province, in which two tertiary hospitals, one teaching hospital, two secondary hospitals and 147 primary hospitals are included. There isn’t any specialized government hospital in this region.</p>
        <h2>1.MALARIA</h2>
        <table >
        <tr> <td class="td-dark">Annual Blood Examination rate of malaria in high risk districts </td> <td>0.44</td> </tr>
        <tr> <td class="td-dark">Malaria annual parasite incidence per 1000 population at high risk districts</td>      <td>0.02</td>   </tr>
         <tr> <td class="td-dark">Percentage of Plasmodium falciparum cases in high risk districts </td><td> 24.5</td> </tr>
        <tr> <td class="td-dark">Percentage of imported cases among positive cases of malaria</td>    <td>77.6</td>   </tr>
        <tr>   <td class="td-dark"> Slide positivity rate of malaria among high risk districts</td>   <td>0.39</td>    </tr>
        </table>
        <p>The major affected  districts are Udaypur and Jhapa, mountain districts such as solukhumbu is safer.</p>
        
        <h2>2.Kala-azar</h2>
        <p>Province 1 is affected by Kala-azar. Terai region is most affected region. Districts in Terai regions like Jhapa and Morang are still affected. The trend of Kala-azar has gone significantly down in recent years. </p>
        <table>
        <tr class="table-heading"> <th>_no_</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Jhapa</td> <td>6</td>  </tr>
        <tr>  <td>2</td> <td>Morang</td> <td>21</td>  </tr>
        <tr>  <td>3</td> <td>Sunsari</td> <td>6</td>  </tr>
        <tr>  <td>4</td> <td>Okhaldhunga</td> <td>2</td>  </tr>
        <tr>  <td>5</td> <td>Bhojpur</td> <td>6</td>  </tr>
        <tr>  <td>6</td> <td>Udayapur</td> <td>2</td>  </tr>
        </table>
        <h2>3.Dengue</h2>
        <p>Districts such as Jhapa are highly affected by dengue. Dengue is prevalent in Terai region bodering with India. Jhapa is at high risk zone, and the case is increasing in tend. In 2072 B.S there were only 2 case in Jhapa.</p>
        <table>
        <tr class="table-heading"> <th>_no_</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Jhapa</td> <td>405</td>  </tr>
        </table>
        
        <h2>4.Leprosy</h2>
        <p>The rate of Leprosy in province 1 is 0.82 per 10000 people. There were total of 394 cases. Jhapa and Morang have highest rate of leprosy in province-1.</p>
        <table>
        <tr> <td class="td-dark">Total cases </td>  <td>394</td>   </tr>
        <tr> <td class="td-dark">Percentage In Nepal </td>  <td>15%</td>   </tr>
        <tr> <td class="td-dark">rate/10,000 population </td>  <td>0.82</td>   </tr>
        </table>
        <h2>5.Tuberculosis</h2>
        <p>Tuberculosis is a public health problem in Nepal that affects thousands of people each year and is the sixth leading casue of death in the country. In 2073/74, the National Tuberculosis Programme registered 31,764 TB cases. If not controlled then TB could take 30,000 lives in just 5 years. The most affected region of Province-1 is Jhapa with 117 reported case in 2073, and less risky is Taplejung having only 22 cases.</p>
        <table>
        <tr class="table-heading">   <th>no</th> <th>Districts</th>   <th>Total Cases</th>    </tr>
        <tr>   <td>1</td>   <td class="td-dark">Solukhumbu</td>  <td>30</td>   </tr>
        <tr>   <td>2</td>   <td class="td-dark">  Sankhuwasabha    </td>   <td>  54   </td>   </tr>
        <tr>   <td>3</td>   <td class="td-dark">   Taplejung   </td>   <td>   22  </td>   </tr>
        <tr>   <td>4</td>   <td class="td-dark">   Okhaldhunga         </td>    <td>   54  </td>   </tr>
        <tr>   <td>5</td>   <td class="td-dark">    Khotang  </td>     <td>35     </td>   </tr>
        <tr>   <td>6</td>   <td class="td-dark">  Bhojpur    </td>       <td> 48    </td>   </tr>
        <tr>   <td>7</td>   <td class="td-dark">   Dhankuta   </td>    <td> 48    </td>   </tr>
        <tr>   <td>8</td>   <td class="td-dark">    Terhathum  </td>  <td>37     </td>   </tr>
        <tr>   <td>9</td>   <td class="td-dark">    Panchthar  </td>    <td>  40   </td>   </tr>
        <tr>   <td>10</td>   <td class="td-dark">     Illam  </td>           <td>53     </td>   </tr>
        <tr>   <td>11</td>   <td class="td-dark">   Udaypur   </td>      <td> 79    </td>   </tr>
        <tr>   <td>12</td>   <td class="td-dark">   Sunsari   </td>       <td> 106    </td>   </tr>
        <tr>   <td>13</td>   <td class="td-dark">     Morang </td>      <td>  103   </td>   </tr>
        <tr>   <td>14</td>   <td class="td-dark">   Jhapa   </td>       <td> 117    </td>   </tr>
        </table>
        <h2>6.HIV AIDS</h2>
        <p class="hiv">Female sex workers and their clients, and MSM & TG, male labour migrants are amajor key population at risk for HIV in this province. These key populations mainly reside in highway districts (Sunsari, Morang and Jhapa). NCASC, as per its national surveillance plan has been conducting IBBS surveys among key populations such as FSW, MSM & TG, and PWID in adifferent cluster. HIV prevalence among PWID in Eastern Terai is 8.3% (IBBS, 2015) and 6.3% among MSM & TG in Eastern Terai (IBBS, 2015). Currently, 24 HTS sites are providing HIV testing and counselling services in Province one whereas 9 ART sites are providing treatment and care support to PLHIV. Similarly, 2 OST sites are providing OST service to PWID</p>
        <h3>OST sites in Province one</h3>
        <ul class="hiv-ul-1"><li>Koshi Zonal Hospital, Morang</li>  <li>Mechi Zonal Hospital</li></ul>
        
        <h3>ART sites in Province One </h3>
        <ul class="hiv-ul-2">  
        <li>District Hospital, Dhankuta</li>  
        <li>District Hospital, Illam</li>
         <li>Mechi Zonal Hospital, Jhapa</li>
         <li>Koshi Zonal Hospital, Morang</li>
        <li> District Hospital, Udaipur</li>
        <li>Inaruwa Hospital, Sunsari</li>
        <li>BP Koirala Institute of Health Sciences(BPKIHS), Sunsari </li>
        <li> District Hospital, Okhaldhunga</li>
        <li> District Hospital, Sankhuwasava</li>
        </ul>

        <div class="center">
        <div></div>
        <div class="alert">
        <h1 class="h1-alert">Alert areas</h1>
        <p class="p-disease">Kala-azar-  Morang</p>
        <p class="p-disease">Dengue- Jhapa</p>
        </div>
        <div></div>
        </div>

    
        `;

    }
    else if((x>472 && x<530 && y>370 && y<487) || (x>536 && x<615 && y>403 && y<482) 
        || (x>617 && x<660 && y>425 && y<490) || (x>670 && x<723 && y>451 && y<488))
    {
        //province 2
      
        let thisText=document.querySelector('.thisText');

        thisText.innerHTML=`<h1>Province 2</h1>
        <p class="province-intro">Province 2 consists of flat lands. The climate is tropical, so many infectious diseases such as malaria is still prevelant in this place. Province number 2 lies in the southeastern planes of Nepal. It consists of 8 districts from Saptrai in the east to Parsa in the west. The province compromises of following districts:Bara; Dhanusha; Mahottari; Parsa; Rautahat; Saptari; Siraha and Sarlahi. There are one Metropolitan city, three submetropolitan cities, 43 Municipalities and 80 rural municipalities in province two.  </p>
         <p class="province-intro">It has a population of  5,404,145. The fertility rate is 3%, mortality rate under 5 is 52 per 1000, percent of children fully immunized is 65.2%. There are total of 789 health facilities in this province, in which one tertiary hospital, one teaching hospital, three secondary hospitals and 126 primary hospitals are included. There isn’t any specialized government hospital in this region.</p>

        <h2>1.MALARIA</h2>
        <table>
        <tr> <td class="td-dark">Annual Blood Examination rate of malaria in high risk districts </td> <td>0.51</td> </tr>
        <tr> <td class="td-dark">Malaria annual parasite incidence per 1000 population at high risk districts</td>      <td>0.04</td>   </tr>
         <tr> <td class="td-dark">Percentage of Plasmodium falciparum cases in high risk districts </td><td> 19.9</td> </tr>
        <tr> <td class="td-dark">Percentage of imported cases among positive cases of malaria</td>    <td>28.1</td>   </tr>
        <tr>   <td class="td-dark"> Slide positivity rate of malaria among high risk districts</td>   <td>0.83</td>    </tr>
        </table>
        <p>Province 2 due to its location in Terai region is suitable breeding ground for mosquitoes, as a result, this province is affected by malaria specially in districts such as Dhanusha, Sarlahi and Rautahat.</p>
        <h2>2.Kala-azar</h2>
        <p>Province 2 being terai region is most affected region. Districts in Terai regions like Dhanusha, Siraha and Sarlahi are most affected. The trend of Kala-azar has gone significantly down in recent years. </p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Dhanusha</td> <td>15</td>  </tr>
        <tr>  <td>2</td> <td>Siraha</td> <td>15</td>  </tr>
        <tr>  <td>3</td> <td>Mahottari</td> <td>11</td>  </tr>
        <tr>  <td>4</td> <td>Sarlahi</td> <td>24</td>  </tr>
        <tr>  <td>5</td> <td>Saptari</td> <td>6</td>  </tr>
        <tr>  <td>6</td> <td>Rautahat</td> <td>1</td>  </tr>
        <tr>  <td>7</td> <td>Bara </td> <td>1</td>  </tr>
        <tr>  <td>8</td> <td>Parsa</td> <td>1</td>  </tr>
        </table>
        <h2>Dengue</h2>
        <p>Province 2 is in border with india, due to flat terrain rainwater easily gets collected instead of flowing, this type of condition is ideal for breeding mosquitoes. Though, the number of cases has significantly droped, for example Parsa had 114 cases of Dengue in 2071 B.S compared to current 7 cases is quite a improvement.</p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Parsa </td> <td>7/td>  </tr>
        <tr>  <td>2</td> <td>Bara</td> <td>4</td>  </tr>
        <tr>  <td>3</td> <td>Mahottari </td> <td>3</td>  </tr>
        <tr>  <td>4</td> <td>Rautahat </td> <td>0</td>  </tr>
        </table>
        <h2>4.Leprosy</h2>
        <p>The rate of Leprosy in province 1 is 1.50 per 10000 people. There were total of 890 cases.  Dhanusha has rate of 2.03 per 10000 people, Parsa has 1.6,  Bara with 1.59 , and Sarlahi with 1.58 rate, is nearly one third of all leprosy case in Nepal. The average leprosy rate itself in this region is nearly 60% more than national average.</p>
        <table>
        <tr> <td class="td-dark">Total cases </td>  <td>890</td>   </tr>
        <tr> <td class="td-dark">Percentage In Nepal </td>  <td>34%</td>   </tr>
        <tr> <td class="td-dark">rate/10,000 population </td>  <td>1.50</td>   </tr>
        </table>
        <h2>5.Tuberculosis</h2>
        <p>Tuberculosis is a public health problem in Nepal that affects thousands of people each year and is the sixth leading casue of death in the country. In 2073/74, the National Tuberculosis Programme registered 31,764 TB cases. If not controlled then TB could take 30,000 lives in just 5 years.</p>
        <table>
        <tr class="table-heading">   <th>no</th> <th>Districts</th>   <th>Total Cases</th>    </tr>
        <tr>   <td>1</td>   <td class="td-dark">  Parsa    </td> 	      <td> 136    </td>      	</tr>
        <tr>   <td>2</td>   <td class="td-dark">   Bara   </td> 	      <td> 122    </td>      	</tr>
        <tr>   <td>3</td>   <td class="td-dark">  Rautahat    </td> 	      <td>102     </td>      	</tr>
        <tr>   <td>4</td>   <td class="td-dark">    Sarlahi  </td> 	      <td>   102  </td>      	</tr>
        <tr>   <td>5</td>   <td class="td-dark">     Mahottari </td> 	      <td>  120   </td>      	</tr>
        <tr>   <td>6</td>   <td class="td-dark">   Dhanusha   </td> 	      <td>  121   </td>      	</tr>
        <tr>   <td>7</td>   <td class="td-dark">    Siraha  </td> 	      <td> 88     </td>      	</tr>
        <tr>   <td>8</td>   <td class="td-dark">   Saptari   </td> 	      <td>    88 </td>      	</tr>
        </table>
        <h2>6.HIV AIDS</h2>
        <p class="hiv">female sex workers and their clients, PWID, and MSM & TG are main epidemic drivers for HIV in these districts. IBBS surveys are regularly conducted among the key population (FSW, PWIDs, and MSM/TG). In this province, HIV responses are targeted to these groups. Currently, 15 HTS sites are providing HIV testing and counseling services in Province two whereas 8 ART sites are providing treatment and care support to PLHIV. NarayaniSub-regional Hospital is the only site providing OST service to PWID in this province.</p>
        <h3 >ART Sites in Province Two</h3>
        <ul class="hiv-ul-2">
        <li>District Hospital, Bara</li>
        <li>District Hospital, Rautahat</li>
        <li>District Hospital, Sarlahi</li>
        <li>District Hospital, Jaleshwor, Mahottari</li>
        <li> Janakpur Zonal Hospital</li>
        <li> Narayani Sub regional Hospital, Birgunj</li>
        <li> Sagarmatha Zonal Hospital, Saptari</li>
        <li>Ram Kumar Uma Shankar Charity Hospital, Siraha</li>
        
        </ul>

        <div class="center">
        <div></div>
        <div class="alert">
        <h1 class="h1-alert">Alert areas</h1>
        <p class="p-disease">Kala-azar- Sarlahi,  Dhanusha , Siraha </p>
        <p class="p-disease">Malaria- Dhanusha </p>
        </div>
        <div></div>
        </div>

        `;
    }
    else if((x>546 && x<650 && y>226 && y<264) || (x>500 && x<660 && y>267 && y<305) 
        || (x>466 && x<671 && y>306 && y<348) || (x>425 && x<460 && y>340 && y<370) 
        || (x>460 && x<531 && y>352 && y<367) ||(x>533 && x<589 && y>352 && y<395)
        || (x>592 && x<640 && y>352 && y<400) || (x>618 && x<649 && y>402 && y<423))
    {
        //province 3
        let thisText=document.querySelector('.thisText');

        thisText.innerHTML=`<h1>Province 3</h1>
        <p class="province-intro">Province 3  consists mainly Mountain and hilly region, including bhabhar area of Chitwan district. This region is developed than other provinces because the capital is situated this province, and the literacy rate is high. The population of this region is 5,529,452. The fertility rate is 1.8%, mortality rate under 5 is 36 per 1000, percent of children fully immunized is 85.3%. There are total of 705 health facilities in this province, in which one central specialized hospital( Bir Hospital), seven specialized hospitals, one tertiary hospital, two teaching hospital, three secondary hospitals and 127 primary hospitals are included. </p>
        <h2>1.MALARIA</h2>
        <table>
        <tr> <td class="td-dark">Annual Blood Examination rate of malaria in high risk districts </td> <td>0.42</td> </tr>
        <tr> <td class="td-dark">Malaria annual parasite incidence per 1000 population at high risk districts</td>      <td>0.03</td>   </tr>
         <tr> <td class="td-dark">Percentage of Plasmodium falciparum cases in high risk districts </td><td> 28.9</td> </tr>
        <tr> <td class="td-dark">Percentage of imported cases among positive cases of malaria</td>    <td>37.8</td>   </tr>
        <tr>   <td class="td-dark"> Slide positivity rate of malaria among high risk districts</td>   <td>0.63</td>    </tr>
        </table>
        <p>Province 3 lies mostly in hilly region, so the region affected by malaria is lesser than province 2. However, districts like Chitwan and some parts of Makwanpur is still affected by malaria.</p>
        <h2>2.Kala-azar</h2>
        Province 3 is not at risk from kala-azar, only tropical areas of Makwanpur district are affected.
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Makwanpur</td> <td>5</td>  </tr>
        </table>
        <h2>3.Dengue</h3>
        <p>Province 3 despite its mostly hilly terrain has one of the highest case of Dengue in Nepal. This is due to low elevation valleys which has a tropical climate and lots of moisture. Chitwan district is the most affected region of Nepal, and the trend is increasing year after year. Similarly, Makwanpur is also following the same trend and the number of cases has bommed.</p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Chitwan </td> <td>687</td>  </tr>
        <tr>  <td>2</td> <td>Makwanpur </td> <td>82/td>  </tr>
        <tr>  <td>3</td> <td>Kathmandu </td> <td>5/td>  </tr>
        <tr>  <td>4</td> <td>Kavre</td> <td>2/td>  </tr>
        </table>
        <h2>4.Leprosy</h2>
        <p>The rate of Leprosy in province 1 is 0.26 per 10000 people, which is the lowest of all provinces. Only Chitwan has relatively higher rate that is 1.12. High literacy rate, availabililty of proper health care and facilities are some of the reasons the leprosy rate is low.</p>
        <table>
        <tr> <td class="td-dark">Total cases </td>  <td>157</td>   </tr>
        <tr> <td class="td-dark">Percentage In Nepal </td>  <td>6%</td>   </tr>
        <tr> <td class="td-dark">rate/10,000 population </td>  <td>0.26</td>   </tr>
        </table>
        <h2>5.Tuberculosis</h2>
        <p>Tuberculosis is a public health problem in Nepal that affects thousands of people each year and is the sixth leading casue of death in the country. In 2073/74, the National Tuberculosis Programme registered 31,764 TB cases. If not controlled then TB could take 30,000 lives in just 5 years.</p>
        <table>
        <tr class="table-heading">   <th>no</th> <th>Districts</th>   <th>Total Cases</th>    </tr>
        <tr>   <td>1</td>   <td class="td-dark">  Dhading    </td> 	      <td>   75  </td>      	</tr>
        <tr>   <td>2</td>   <td class="td-dark">   Rasuwa   </td> 	      <td>   61  </td>      	</tr>
        <tr>   <td>3</td>   <td class="td-dark">    Nuwakot  </td> 	      <td> 85    </td>      	</tr>
        <tr>   <td>4</td>   <td class="td-dark">    Sindhupalchowk  </td> 	      <td> 70    </td>      	</tr>
        <tr>   <td>5</td>   <td class="td-dark">   Dolakha   </td> 	      <td>57     </td>      	</tr>
        <tr>   <td>6</td>   <td class="td-dark">   Ramechhap   </td> 	      <td>  62   </td>      	</tr>
        <tr>   <td>7</td>   <td class="td-dark">    Kathmandu  </td> 	      <td>  160   </td>      	</tr>
        <tr>   <td>8</td>   <td class="td-dark">    Bhaktapur  </td> 	      <td> 162    </td>      	</tr>
        <tr>   <td>9</td>   <td class="td-dark">   Kavre   </td> 	      <td>   89  </td>      	</tr>
        <tr>   <td>10</td>   <td class="td-dark">   Lalitpur   </td> 	      <td>   153  </td>      	</tr>
        <tr>   <td>11</td>   <td class="td-dark">   Makwanpur   </td> 	      <td> 154    </td>      	</tr>
        <tr>   <td>12</td>   <td class="td-dark">  Sinduli    </td> 	      <td> 94    </td>      	</tr>
        <tr>   <td>13</td>   <td class="td-dark">    Chitwan  </td> 	      <td> 143    </td>      	</tr>
        </table>
        <h2>6.HIV AIDS</h2>
        <p class="hiv">This province consist of highway districts and Kathmandu Valley, its epidemic is mainly driven by PWID(Male and Female), FSQs, clients of sex workers and MSM/TG. Some districts in this province are categorized as low HIV prevalence zone where no risk groups are drivers of HIV. HIV prevalence among FSW in the Kathmandu Valley is 2% whereas HIV prevalence among PWID and MSM/TG is 6.4% and 2.4% respectively.</p>
        <ul class="hiv-ul-1">
        <li>Bhaktapur Hospital, Bhaktapur</li>
        <li>Bharatpur Hospital, Chitwan</li>
        <li>District Hospital, Dhading </li>
        <li> Sukraraj Tropical & Infectious Disease Control Hospital, Kathmandu </li>
        <li> Kanti Children’s Hospital, Kathmandu </li>
        <li> Maiti Nepal, Kathmandu VII. Bir Hospital, Kathmandu </li>
        <li> Tribhuvan University Teaching Hospital (TUTH), Kathmandu </li>
        <li> Maternity Hospital, Kathmandu </li>
        <li> Dhulikhel Hospital, Kavre </li>
        <li> Sparsha Nepal, Lalitpur </li>
        <li> District Hospital, Makwanpur </li>
        <li> Trishuli Hospital, Nuwakot </li>
        <li> District Hospital, Sindhuli </li>
        <li> District Hospital, Sindhupalchowk</li>
        </ul>

        <div class="center">
        <div></div>
        <div class="alert">
        <h1 class="h1-alert">Alert areas</h1>
        <p class="p-disease">Dengue-  Chitwan</p>
        </div>
        <div></div>
        </div>

        `;
    }
    else if((x>371 && x<505 && y>135 && y<200) ||(x>322 && x<525 && y>202 && y<263) 
            || (x>355 && x<495 && y>265 && y<304) || (x>392 && x<420 && y>308 && y<375) 
            || (x>422 && x<461 && y>309 && y<335) )
    {
        console.log('province 4');
        let thisText=document.querySelector('.thisText');

        thisText.innerHTML=` <h1 class="h1">Province 4</h1>
        <p class="province-intro">Province 4 consists of Mountain and hilly region, the climate varies from subtropical to tundra. Province number 4 lies in the western part of Nepal and mostly consists of hills and mountain region. It constitutes of 1 metropolitan, 29 municipalities and 55 rural municipalities (85 local bodies in total). It consists of 11 districts: Baglung; Gorkha; Kaski; Lamjung; Manang; Mustang; Myagdi; Nawalpur; Parbat; Syangja and Tanahun.2</p>
        
        <p class="province-intro">The literacy rate is high in this region, and consists of big cities like pokhara. The total population is 2,403,757. . The fertility rate is 2%, mortality rate under 5 is 27  per 1000, percent of children fully immunized is 92.7%. There are total of 524 health facilities in this province, in which one specialized hospital, one tertiary hospital, one teaching hospital, 91 primary hospitals are included.</p>

        <h2>1.MALARIA</h2>
        <table>
        <tr> <td class="td-dark">Annual Blood Examination rate of malaria in high risk districts </td> <td>0.87</td> </tr>
        <tr> <td class="td-dark">Malaria annual parasite incidence per 1000 population at high risk districts</td>      <td>0.03</td>   </tr>
         <tr> <td class="td-dark">Percentage of Plasmodium falciparum cases in high risk districts </td><td> 10.3</td> </tr>
        <tr> <td class="td-dark">Percentage of imported cases among positive cases of malaria</td>    <td>72.4</td>   </tr>
        <tr>   <td class="td-dark"> Slide positivity rate of malaria among high risk districts</td>   <td>0.32</td>    </tr>
        </table>

        <p>There is no risk of malaria in most part of province 4. In Pokhara and some mountain valleys, there is less risk , due to its relatively hot climate, and accumulation of water.</p>
        <h2>2.Kala-azar</h2>
        <p>Province 4 is not at risk from kala-azar.</p>

        <h2>3.Dengue</h2>
        <p>The cases of Dengue is relatively low in this province. Neighboring districts of Chitwan like Gorkha is at lower risk.<p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Kaski </td> <td>1</td>  </tr>
        <tr>  <td>2</td> <td>Gorkha </td> <td>0</td>  </tr>
        </table>

        <h2>4.Leprosy</h2>
        <p>The rate of Leprosy in province 1 is 0.47 per 10000 people, which is the one of the lowest of all provinces. Only Kapilvastu has relatively higher rate that is 1.11. </p>
        <table>
        <tr> <td class="td-dark">Total case</td>  <td>116</td>   </tr>
        <tr> <td class="td-dark">Percentage In Nepal </td>  <td>4%</td>   </tr>
        <tr> <td class="td-dark">rate/10,000 population </td>  <td>0.47</td>   </tr>
        </table>

        <h2>5.Tuberculosis</h2>
        <p>Tuberculosis is a public health problem in Nepal that affects thousands of people each year and is the sixth leading casue of death in the country. In 2073/74, the National Tuberculosis Programme registered 31,764 TB cases. If not controlled then TB could take 30,000 lives in just 5 years.</p>
        <table>
        <tr class="table-heading"> <th>no</th> <th>Districts</th>   <th>Total Cases</th>    </tr>
        <tr>   <td>1</td>   <td class="td-dark"> Mustang     </td> 	      <td> 73    </td>      	</tr>
        <tr>   <td>2</td>   <td class="td-dark">  Manang    </td> 	      <td>   31  </td>      	</tr>
        <tr>   <td>3</td>   <td class="td-dark">   Gorkha   </td> 	      <td> 89    </td>      	</tr>
        <tr>   <td>4</td>   <td class="td-dark">  Myagdi    </td> 	      <td>  61   </td>      	</tr>
        <tr>   <td>5</td>   <td class="td-dark">  Kaski    </td> 	      <td>   86  </td>      	</tr>
        <tr>   <td>6</td>   <td class="td-dark">   Lamjung   </td> 	      <td>79     </td>      	</tr>
        <tr>   <td>7</td>   <td class="td-dark">    Baglung  </td> 	      <td>  56   </td>      	</tr>
        <tr>   <td>8</td>   <td class="td-dark">   Parbat    </td> 	      <td>  66   </td>      	</tr>
        <tr>   <td>9</td>   <td class="td-dark">    Syangja  </td> 	      <td>   94  </td>      	</tr>
        <tr>   <td>10</td>   <td class="td-dark">   Tanahun   </td> 	      <td>    90 </td>      	</tr>
        <tr>   <td>11</td>   <td class="td-dark">   Nawalpur   </td> 	      <td>   130  </td>      	</tr>
        </table>

        <h2>6.HIV AIDS</h2>
        <p class="hiv">This province consists of highway districts and the Pokhara Valley. FSW and their clients, MSM/TG, PWIDs and migrant workers are key populations in the Pokhara Valley whereas rest of the districts are considered as low HIV prevalence zones. IBBS surveys are conducted in the Pokhara valley in regular intervals among key populations. HIV prevalence among FSW, PWIDs is 0.3%, 2.8%.respectively. There are 24 HTS sites, 1 OST site (Western Regional Hospital) and 9 ART centres in this province which are providing HIV prevention, treatment and care services</p>

        <h3>List of ART sites in Province 4</h3>

        <ul class="hiv-ul-1">
        <li>Dhaulagiri Zonal Hospital</li> 
        <li>District Hospital, Gorkha </li>
        <li> Western Regional Hospital, Pokhara</li>
        <li> Lamjung Community Hospital </li>
        <li> District Hospital, Myagdi </li>
        <li> District Hospital, Syangja </li>
        <li> District Hospital, Tanahun </li>
        <li> District Hospital, Parbat</li>
        <li> Walling PHC, Syanja</li>
        </ul>


        `;
    }
    else if((x>270 && x<313 && y>205 && y<235) || (x>111 && x<141 && y>234 && y<279) 
            || (x>144 && x<182 && y>241 && y<345) || (x>189 && x<240 && y>267 && y<355) 
            || (x>243 && x<307 && y>238 && y<361) ||(x>313 && x<346 && y>267 && y<304) 
            || (x>313 && x<389 && y>308 && y<375))
    {
        console.log('province 5');
        let thisText=document.querySelector('.thisText');

        thisText.innerHTML=`<h1>Province 5</h1>
        <p class="province-intro">The region consists of only hill and Terai area. Province number 5 lies in the mid-western Terai and hilly region of Nepal. It consists of 12 districts namely:Arghakhanchi; Banke; Bardiya; Dang; Gulmi; Kapilvastu; Nawalparasi west; Palpa; Pyunthan; Rolpa; Rukum and Rupandehi. This province consists of Terai highway districts and Hilly regions from where people migrate to India and other countries.</p>
        <p class="province-intro">The total population is 4,499,272. . The fertility rate is 2.4%, mortality rate under 5 is 45 per 1000, percent of children fully immunized is 78.3%. There are total of 614 health facilities in this province, in which one specialized hospital, one tertiary hospital, one teaching hospital, one secondary hospital, 111 primary hospitals are included.</p>
        <h2>1.MALARIA</h2>
        <table>
        <tr> <td class="td-dark">Annual Blood Examination rate of malaria in high risk districts </td> <td>1.07</td> </tr>
        <tr> <td class="td-dark">Malaria annual parasite incidence per 1000 population at high risk districts</td>      <td>0.08</td>   </tr>
         <tr> <td class="td-dark">Percentage of Plasmodium falciparum cases in high risk districts </td><td> 16.19</td> </tr>
        <tr> <td class="td-dark">Percentage of imported cases among positive cases of malaria</td>    <td>74.5</td>   </tr>
        <tr>   <td class="td-dark"> Slide positivity rate of malaria among high risk districts</td>   <td>0.77</td>    </tr>
        </table>
        <p>Province 5 is situated in both terai and hilly region. Some areas of terai region of province 5 such as Kapilbastu, Rupandehi, few areas of Dang and Banke are still in low risk malaria zone.</p>
        <h2>2.Kala-azar</h2>
        <p>Province 5  is less risker from kala-azar, but Palpa district is  affected.</p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Palpa</td> <td>16</td>  </tr>
        </table>
        <h2>3.Dengue</h2>
        The cases of Dengue is medium in this province. The location of majority of region being terai and being bordered by India is major reason for Dengue fever.
        <table>
        <tr class="table-heading"> <th>_no_</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Dang </td> <td>8</td>  </tr>
        <tr>  <td>2</td> <td>Kapilbastu </td> <td>3</td>  </tr>
        <tr>  <td>3</td> <td>Nawalparasi </td> <td>3</td>  </tr>
        <tr>  <td>4</td> <td>Pyuthan </td> <td>1</td>  </tr>
        <tr>  <td>5</td> <td>Palpa </td> <td>0</td>  </tr>
        <tr>  <td>6</td> <td>Gulmi </td> <td>0</td>  </tr>
        </table>
        <h2>4.Leprosy</h2>
        <p>The rate of Leprosy in province 1 is 1.56 per 10000 people, which is the lowest of all provinces. Terai region of this province has the highest rate of leprosy in Nepal. Banke comes first at 4.57 per 10,000 people rate, which is 4.5 times national average, and in second number is neighboring district Bardiya with 4.53 rate per 10,000 people.</p>
        <table>
        <tr> <td class="td-dark">Total cases </td>  <td>761</td>   </tr>
        <tr> <td class="td-dark">Percentage In Nepal </td>  <td>29%</td>   </tr>
        <tr> <td class="td-dark">rate/10,000 population </td>  <td>1.56</td>   </tr>
        </table>
        <h2>5.Tuberculosis</h2>
        <p>Tuberculosis is a public health problem in Nepal that affects thousands of people each year and is the sixth leading casue of death in the country. In 2073/74, the National Tuberculosis Programme registered 31,764 TB cases. If not controlled then TB could take 30,000 lives in just 5 years. Dang is the most affected region with 193 cases reported in 2073 alone.</p>
        <table>
        <tr class="table-heading">   <th>no</th> <th>Districts</th>   <th>Total Cases</th>    </tr>
        <tr>   <td>1</td>   <td class="td-dark">  Bardiya     </td> 	      <td> 131    </td>      	</tr>
        <tr>   <td>2</td>   <td class="td-dark">    Banke  </td> 	      <td> 161    </td>      	</tr>
        <tr>   <td>3</td>   <td class="td-dark">   Dang   </td> 	      <td> 193    </td>      	</tr>
        <tr>   <td>4</td>   <td class="td-dark">    Kapilbastu  </td> 	      <td>   102  </td>      	</tr>
        <tr>   <td>5</td>   <td class="td-dark">  Rupandehi    </td> 	      <td>  134   </td>      	</tr>
        <tr>   <td>6</td>   <td class="td-dark">    Nawalparasi  </td>     <td>  130   </td>      	</tr>
        <tr>   <td>7</td>   <td class="td-dark">  Rukum East    </td>       <td> 96    </td>      	</tr>
        <tr>   <td>8</td>   <td class="td-dark">   Rolpa   </td> 	      <td>120     </td>      	</tr>
        <tr>   <td>9</td>   <td class="td-dark">    Pyuthan  </td> 	      <td>   120  </td>      	</tr>
        <tr>   <td>10</td>   <td class="td-dark">   Gulmi   </td> 	      <td> 111    </td>      	</tr>
        <tr>   <td>11</td>   <td class="td-dark">  Arghakhanchi    </td> 	      <td>  112   </td>      	</tr>
        <tr>   <td>12</td>   <td class="td-dark">   Palpa   </td> 	      <td> 144    </td>      	</tr>
        </table>
        <h2>6.HIV AIDS</h2>
        <p>Female sex workers and their clients, PWIDs MSM/TG, are key risk populations in Terai districts whereas migrants are the key risk populations in the hilly districts. NCASC conducts IBBS surveys among key population (PWID in Western to Far-western Terai highway districts, MSM/TG in Terai districts, and migrants in western hilly regions). There are 26 HTS sites, 3 OST sites, and 12 ART sites in this province which are providing HIV prevention, treatment and care services.</p>
        <h3>List of ART sites in province 5</h3>
        <ul class="hiv-ul-1">
        <li>Bheri Zonal Hospital, Banke</li>
        <li> Rapti Sub Regional Hospital, Dang </li>
        <li> District Hospital, Bardiya </li>
        <li>District Hospital, Rolpa </li>
        <li>District Hospital, Pyuthan </li>
        <li> District Hospital, Gulmi</li>
        <li> District Hospital, Kapilvastu </li>
         <li>Prithivi Chandra Hospital, Nawalparasi </li>
        <li> United Mission Hospital, Palpa</li>
        <li> Lumbini Zonal hospital, Rupandehi </li>
        <li> District Hospital, Rukum </li>
        <li> Bhim Hospital, Rupandeh </li>
        <li> District Hospital, Argakhachi</li>
        </ul>
        <h3>List of OST sites</h3>
        <ul clalss="hiv-ul-2">
        <li>Bheri Zonal Hospital, Banke</li>
        <li>Lumbini Zonal Hospital, Rupandehi</li>
        <li>Youth Vision, Rupandehi</LI>
        </ul>

        
        <div class="center">
        <div></div>
        <div class="alert">
        <h1 class="h1-alert">Alert areas</h1>
        <p class="p-disease">Malaria-  Kapilvastu </p>
        <p class="p-disease">Dengue- Rupandehi </p>
        <p class="p-disease">Leprosy- Banke, Bardiya </p>
        </div>
        <div></div>
        </div>

        `;
        
       

    }
    else if((x>151 && x<227 && y<51) || (x>187 && x<315 && y>56 && y<295) 
            || (x>190 && x<339 && y>100 && y<121) || (x>149 && x<174 && y>138 && y<191) 
            || (x>176 && x<357 && y>127 && y<198) || (x>141 && x<178 && y>195 && y<232) 
            || (x>180 && x<242 && y>198 && y<237) || (x>243 && x<263 && y>200 && y<227) 
            || (x>186 && x<234 && y>242 && y<262))
    {
        console.log('province 6');
        let thisText=document.querySelector('.thisText');

        thisText.innerHTML=`<h1>Province 6</h1>
        <p class="province-intro">Province 6 is the least developed region of Nepal. Province number 6 lies in Midwestern hills and Mountain region of Nepal. It consists of 10 districts which are categorized as low HIV prevalence zones in Nepal (Dailekh; Dolpa; Humla; Mugu; Jajarkot; Rukum west;Salyan; Kalikot;Jumla and Surkhet)</p>
        <p class="province-intro">The literacy rate is lower, supersticious beliefs are present, geography limits the development of infrastructures and basic needs. Despite being one of the biggest provinces, the population is only 1,570,418. The fertility rate is 2.8%, mortality rate under 5 is 58 per 1000, percent of children fully immunized is 74.9%. There are total of ONLY 362 health facilities in this province, in which one tertiary hospital, one teaching hospital, 80 primary hospitals are included.</p>
        <h2>1.MALARIA</h2>
        <table>
        <tr> <td class="td-dark">Annual Blood Examination rate of malaria in high risk districts </td> <td>0.7</td> </tr>
        <tr> <td class="td-dark">Malaria annual parasite incidence per 1000 population at high risk districts</td>      <td>0.13</td>   </tr>
         <tr> <td class="td-dark">Percentage of Plasmodium falciparum cases in high risk districts </td><td> 5.3</td> </tr>
        <tr> <td class="td-dark">Percentage of imported cases among positive cases of malaria</td>    <td>74.7</td>   </tr>
        <tr>   <td class="td-dark"> Slide positivity rate of malaria among high risk districts</td>   <td>1.7</td>    </tr>
        </table>
        <p>Despite being mostly hilly and mountainous, province 6 is at higher risk malaria zone at low elevation valleys such as Surkhet valley. Surkhet district is at high risk malaria zone. Other districts are safer . </p>
        <h2>2.Kala-azar</h2>
        <p>Province 6 is not at risk from kala-azar, only tropical areas of Surkhet district are affected.</p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Surkhet</td> <td>11</td>  </tr>
        </table>
        <h2>3.Dengue</h2>
        <p>The cases of Dengue is relatively low in this province. This province is not bordered by India, and is mostly hilly in geography.</p>
        <h2>4.Leprosy</h2>
        <p>The rate of Leprosy in province 1 is 0.64 per 10000 people, which is the third lowest of all provinces. 4% of total cases of leprosy in Nepal.  Jajarkot has higher rate of leprosy at 1.28 per 10,000 which is twice the province average of 0.64.</p>
        <table>
        <tr> <td class="td-dark">Total cases </td>  <td>110</td>   </tr>
        <tr> <td class="td-dark">Percentage In Nepal </td>  <td>4%</td>   </tr>
        <tr> <td class="td-dark">rate/10,000 population </td>  <td>0.64</td>   </tr>
        </table>
        <h2>5.Tuberculosis</h2>
        <p>Tuberculosis is a public health problem in Nepal that affects thousands of people each year and is the sixth leading casue of death in the country. In 2073/74, the National Tuberculosis Programme registered 31,764 TB cases. If not controlled then TB could take 30,000 lives in just 5 years.</p>
        <table>
        <tr class="table-heading">   <th>no</th> <th>Districts</th>   <th>Total Cases</th>    </tr>
        <tr>   <td>1</td>   <td class="td-dark">  Humla    </td> 	      <td>   74  </td>      	</tr>
        <tr>   <td>2</td>   <td class="td-dark">  Mugu    </td> 	      <td>    84 </td>      	</tr>
        <tr>   <td>3</td>   <td class="td-dark">  Jumla    </td> 	      <td>  76   </td>      	</tr>
        <tr>   <td>4</td>   <td class="td-dark">  Kalikot    </td> 	      <td> 64    </td>      	</tr>
        <tr>   <td>5</td>   <td class="td-dark">    Dailekh  </td> 	      <td> 86    </td>      	</tr>
        <tr>   <td>6</td>   <td class="td-dark">   Surkhet   </td> 	      <td>  168   </td>      	</tr>
        <tr>   <td>7</td>   <td class="td-dark">   Dolpa   </td> 	      <td> 17    </td>      	</tr>
        <tr>   <td>8</td>   <td class="td-dark">    Jajarkot  </td> 	      <td>64     </td>      	</tr>
        <tr>   <td>9</td>   <td class="td-dark">    Rukum West  </td> 	      <td>96     </td>      	</tr>
        <tr>   <td>10</td>   <td class="td-dark">    Salyan  </td> 	      <td>83     </td>      	</tr>
        </table>
        <h2>6.HIV AIDS</h2>
        <ul class="hiv-ul">
        <li>District Hospital, Dailekh </li>
        <li> Mid-Western Regional Hospital, Surkhet </li>
        <li> Kalikot District Hospital, Kalikot </li>
        <li> Salyan District Hospital, Salyan</li>
        </ul>

        <div class="center">
        <div></div>
        <div class="alert">
        <h1 class="h1-alert">Alert areas</h1>
        <p class="p-disease">Malaria- Surkhet </p>
        </div>
        <div></div>
        </div>

        `;
    }
    else if((x>12 && x<139 && y>21 && y<50) || (x>26 && x<180 && y>52 && y<123) 
            || (x>17 && x<148 && y>125 && y<192) ||(x>18 && x<123 && y>194 && y<230) )
    {
        console.log('province 7');
        let thisText=document.querySelector('.thisText');

        thisText.innerHTML=`<h1>Province 7</h1>
        <p class="province-intro">Province 7 is situated at far western side of Nepal. It consists of Terai and hilly region. Province number7 lies in the far-western region of Nepal and consists of 9 districts. It is similar to previous Far-Western Development Region which consisted of 9 far-western districts as mentioned below (Achham; Baitadi; Bajhang; Bajura; Dadeldhura; Darchula; Doti; Kailali and Kanchanpur).</p>
         <p class="province-intro">The total population is 2,552,517. The fertility rate is 2.2%, mortality rate under 5 is 69 per 1000, percent of children fully immunized is 83.4%. There are total of ONLY 403 health facilities in this province, in which one tertiary hospital, one teaching hospital, one tertiary hospital, 90 primary hospitals are included.</p>
        <h2>1.MALARIA</h2>
        <table>
        <tr> <td class="td-dark">Annual Blood Examination rate of malaria in high risk districts </td> <td>1.6</td> </tr>
        <tr> <td class="td-dark">Malaria annual parasite incidence per 1000 population at high risk districts</td>      <td>0.3</td>   </tr>
         <tr> <td class="td-dark">Percentage of Plasmodium falciparum cases in high risk districts </td><td> 8.3</td> </tr>
        <tr> <td class="td-dark">Percentage of imported cases among positive cases of malaria</td>    <td>50.6</td>   </tr>
        <tr>   <td class="td-dark"> Slide positivity rate of malaria among high risk districts</td>   <td>1.6</td>    </tr>
        </table>
        <p>The most affected region of Nepal in malaria is province 7. Its entire terai region is at high risk malaria zone. Hilly districts like Dadeldura and some parts of Baitadi are also at risk of malaria.</p>
        <h2>2.Kala-azar</h2>
        <p>Province 7 is not at risk from kala-azar, only tropical areas of Kailali district are affected.</p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Kailali</td> <td>2</td>  </tr>
        </table>
        <h2>3.Dengue</h2>
        <p>Terai region of province 7 is in medium risk from dengue due to bordering India, from where the epidemic transmitted towards Nepalese region. .</p>
        <table>
        <tr class="table-heading"> <th>no</th><th>Districts</th> <th>Total Cases</th>  </tr>
        <tr>  <td>1</td> <td>Kailali</td> <td>14</td>  </tr>
        <tr>  <td>2</td> <td>Kanchanpur</td> <td>2</td>  </tr>
        <tr>  <td>3</td> <td>Dadeldhura</td> <td>0</td>  </tr>
        <tr>  <td>2</td> <td>Doti</td> <td>2</td>  </tr>
        </table>
        <h2>4.Leprosy</h2>
        <p>The rate of Leprosy in province 1 is 0.71 per 10000 people, which is the third lowest of all provinces. 8% of total cases of leprosy in Nepal. Kailali with 1.2 rate is highest in province-7. </p>
        <table>
        <tr> <td class="td-dark">Total cases </td>  <td>198</td>   </tr>
        <tr> <td class="td-dark">Percentage In Nepal </td>  <td>8%</td>   </tr>
        <tr> <td class="td-dark">rate/10,000 population </td>  <td>0.71</td>   </tr>
        </table>
        <h2>5.Tuberculosis</h2>
        <p>Tuberculosis is a public health problem in Nepal that affects thousands of people each year and is the sixth leading casue of death in the country. In 2073/74, the National Tuberculosis Programme registered  31,764 TB cases. If not controlled then TB could take 30,000 lives in just 5 years. Kanchanpur is the most affected region with 173 reported cases..</p>
        <table>
        <tr class="table-heading">   <th>no</th> <th>Districts</th>   <th>Total Cases</th>    </tr>
        <tr>   <td>1</td>   <td class="td-dark">   Darchula   </td> 	      <td> 81    </td>      	</tr>
        <tr>   <td>2</td>   <td class="td-dark">  Baitadi    </td> 	      <td>   61  </td>      	</tr>
        <tr>   <td>3</td>   <td class="td-dark">   Dadeldhura   </td>     <td> 74    </td>      	</tr>
        <tr>   <td>4</td>   <td class="td-dark"> Kanchanpur     </td>     <td>  173   </td>      	</tr>
        <tr>   <td>5</td>   <td class="td-dark">    Kailali  </td> 	      <td> 136    </td>      	</tr>
        <tr>   <td>6</td>   <td class="td-dark">    Doti  </td> 	      <td>    86 </td>      	</tr>
        <tr>   <td>7</td>   <td class="td-dark">   Bajhang   </td> 	      <td>  61   </td>      	</tr>
        <tr>   <td>8</td>   <td class="td-dark">  Bajura    </td> 	      <td> 81    </td>      	</tr>
        <tr>   <td>9</td>   <td class="td-dark">    Achham  </td> 	      <td>  66   </td>      	</tr>
        </table>
        <h2>6.HIV AIDS</h2>
        <p class="hiv">This province comprises of 2 Terai highway districts and 7 districts in hilly and mountains regions. FSW, PWIDs and MSM/TG are key drivers of HIV in Terai region whereas male labor migrants are key populations in the 7 hilly districts. IBBS surveys are regularly conducted among these groups in this province. There are 21 HTC and 11 ART sites in this province that provide HIV prevention and treatment and care services to key population.</p>
        <h3>List of ART sites in Province 7</h3>
        <ol class="hiv-ul">
        <li>District Hospital, Achham </li>
        <li> Bayalpata Hospital, Achham </li>
        <li> Kamalbazar PHC, Achham</li>
        <li> District Hospital, Bajhang </li>
        <li>District Hospital, Bajura </li>
        <li> District Hospital, Baitadi </li>
        <li> Dadeldhura Sub-regional Hospital, Dadeldhura</li>
        <li> District Hospital, Darchula</li>
        <li> District Hospital, Doti </li>
        <li> Seti Zonal Hospital, Kailali </li> 
        <li>Tikapur Hospital, Kailali</li>
        <li> Mahakali Zonal Hospital, Mahakali</li>
        </ol>

        <div class="center">
        <div></div>
        <div class="alert">
        <h1 class="h1-alert">Alert areas</h1>
        <p class="p-disease">Malaria- Kanchenpur, Kailali </p>
        </div>
        <div></div>
        </div>

        `;
    }
    

   
}
image.addEventListener('dblclick',displayPixels)
function displayPixels(e)
{
    e.prevenDefault;
    let x=e.offsetX;
    let y=e.offsetY;
    console.log(`x-comp:${x}  y-comp:${y}`);
}