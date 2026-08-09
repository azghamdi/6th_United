const registrationUrl = 'https://indico.un.org/event/1021645/registrations/24259/';

const programme = [
  {label:'9 November — Opening',eyebrow:'Day 1 • Riyadh time',title:'Monday, 9 November 2026',events:[
    {time:'09:00',kind:'session',type:'Official event',title:'Second Saudi Statistical Forum (SSF2)',room:'Plenary Room',duration:'360 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia)'},
    {time:'16:00',kind:'session',type:'Official event',title:'Press conference (LOCATION: Media Corner)',room:'Plenary Room',duration:'60 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA)'},
    {time:'19:00',kind:'session',type:'Official event',title:'Opening ceremony and welcome dinner',room:'Plenary Room',duration:'150 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia)'},
  ]},
  {label:'10 November — Main programme',eyebrow:'Day 2 • Riyadh time',title:'Tuesday, 10 November 2026',events:[
    {time:'09:00',kind:'session',type:'Opening session',title:'Welcome and introduction',room:'Plenary Room',duration:'15 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia) / United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA)'},
    {time:'09:15',kind:'session',type:'Plenary session',title:'Measuring Sustainable Development by 2030 and Beyond',room:'Plenary Room',duration:'75 minutes',organiser:'UN World Data Forum Programme Committee (UNWDF PC)'},
    {time:'10:50',kind:'session',type:'Thematic session',title:'From Data to Livability: Neighborhood Intelligence for Quality of Life, SDG Localization, and Better Urban Decisions',room:'Room 1',duration:'60 minutes',organiser:'Al Madinah Region Development Authority (MDA), Saudi Arabia'},
    {time:'10:50',kind:'session',type:'Thematic session',title:'Regional innovation to transform statistics on migration and displacement: lessons learned and the road ahead',room:'Room 2',duration:'60 minutes',organiser:'African Union Institute for Statistics (STATAFRIC); Arab Institute for Training and Research in Statistics (AITRS); United Nations High Commissioner for Refugees (UNHCR), Expert Group on Refugee, IDP and Statelessness Statistics (EGRISS); Instituto Nacional de Estadistica (INE-Honduras); Instituto Nacional de Estadística y Geografía (INEGI-México); Joint IDP Profiling Service (JIPS); Statistics Sweden; United Nations Economic Commission for Latin America and the Caribbean (UNECLAC / CEPAL)'},
    {time:'10:50',kind:'session',type:'Thematic session',title:'Rethinking Demographic and Health Data Systems in LMICs',room:'Room 3',duration:'60 minutes',organiser:'African Population and Health Research Center (APHRC); Ghana Statistical Service (GSS); Instituto Nacional de Estadística y Geografía (INEGI-México); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); University of Minnesota'},
    {time:'10:50',kind:'session',type:'Thematic session',title:'FAO Agrifood Youth Pulse',room:'Room 4',duration:'60 minutes',organiser:'Food and Agriculture Organization of the United Nations (FAO)'},
    {time:'10:50',kind:'session',type:'Thematic session',title:'International Comparison Program: Innovations and Partnerships for Global Comparisons of Purchasing Power',room:'Room 5',duration:'60 minutes',organiser:'World Bank (WB); European Statistical Office (Eurostat); Organisation for Economic Co-operation and Development (OECD); United Nations Economic and Social Commission for Western Asia (UNESCWA); Pacific Community (SPC); UK Foreign, Commonwealth and Development Office (FCDO)'},
    {time:'10:50',kind:'session',type:'Thematic session',title:'Indigenous Data Sovereignty and Artificial Intelligence in Aotearoa New Zealand',room:'Room 6',duration:'60 minutes',organiser:'University of Waikato; Te Hiku Media; Te Kāhui Raraunga; International Union for Conservation of Nature (IUCN)'},
    {time:'10:50',kind:'session',type:'Announcements',title:'Open Source Artificial Intelligence for Inclusive UN Data Systems / Launch and demonstration of the Civil Registration and Vital Statistics (CRVS) Laws Database / Igniting Data Trust: Aramco\'s Privacy Journey / Airwaves to algorithms: tackling harmful speech / UN System Data Commons: A new access layer for all UN public data',room:'Room 7',duration:'60 minutes',organiser:'Datasketch; United Nations Resident Coordinator (UNRCO) / Global Health Advocacy Incubator / Saudi Aramco / United Nations Department for Peace Operations (UNDPO) / United Nations Department of Economic and Social Affairs (UNDESA); United Nations Children\'s Fund (UNICEF); Office of the United Nations Secretary-General (EOSG)'},
    {time:'10:50',kind:'session',type:'Short talks',title:'Make Intergovernmental Panel on Climate Change (IPCC) Data FAIR with Data Distribution Centre (DDC) Support: Risks and Opportunities / NIKO: Inclusive Data for Climate-Driven Crises / Predicting tomorrow’s Renewables Patterns Using Artificial Intelligence Trained on Ten Years of Historical Data',room:'Room 8',duration:'60 minutes',organiser:'Columbia University; Universidad de Cantabria; Spanish National Research Council (CSIC); MetadataWorks; Science and Technology Facilities Council; The Deutscher Wetterdienst (DWD), Germany / Ministry of Labour and Social Protection, State Department for Social Protection and Senior Citizen Affairs, Kenya; National Council for Persons with Disabilities, Kenya / Saudi Electric Services Polytechnic; Saudi Data and Artificial Intelligence Authority (SDAIA)'},
    {time:'10:50',kind:'workshop',type:'Workshop',title:'Admin data quality lab for SDGs and better decisions',room:'Room 9',duration:'60 minutes',organiser:'United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); United Nations Entity for Gender Equality and the Empowerment of Women (UN Women); Global Partnership for Sustainable Development Data (GPSDD)'},
    {time:'13:10',kind:'session',type:'Thematic session',title:'Advancing Disability Data Processes by leveraging AI and other methods',room:'Room 1',duration:'60 minutes',organiser:'CBM Global Disability Inclusion; International Disability Alliance; Fordham University'},
    {time:'13:10',kind:'session',type:'Thematic session',title:'Strengthening Ethical Safeguards and Transparency Mechanisms in the Use of Advanced Data Technologies',room:'Room 2',duration:'60 minutes',organiser:'Statistical, Economic and Social Research and Training Centre for Islamic Countries (SESRIC); General Authority for Statistics (GAStat-Saudi Arabia)'},
    {time:'13:10',kind:'session',type:'Thematic session',title:'Trusted Data Ecosystems for Resilience and Cross-Border Coordination in Africa',room:'Room 3',duration:'60 minutes',organiser:'Smart Africa; Pan-African Alliance for AI in Transforming Health Infrastructure; African School of Economics'},
    {time:'13:10',kind:'session',type:'Thematic session',title:'From Evidence to Impact: Centering Survivor Ethics in the Next Generation of Violence against Women Data',room:'Room 4',duration:'60 minutes',organiser:'United Nations Population Fund (UNFPA); University of Melbourne'},
    {time:'13:10',kind:'session',type:'Thematic session',title:'A sharper lens: Life in cities, towns and rural areas',room:'Room 5',duration:'60 minutes',organiser:'Gallup, Inc.; European Commission Joint Research Center (JRC); United Nations Population Fund (UNFPA); King Khalid Foundation (KKF); WorldPop, University of Southampton'},
    {time:'13:10',kind:'session',type:'Thematic session',title:'Interoperability and Trust across Data Ecosystems',room:'Room 6',duration:'60 minutes',organiser:'DDI Alliance; Statistics Netherlands (CBS); Central Statistics Office (CSO-Ireland); University of Michigan; Global Legal Entity identifier Foundation (GLEIF); Global Media Registry; Global Energy Monitor; OpenSanctions Datenbanken GmbH; Wikimedia Deutschland e.V.; Open Supply Hub'},
    {time:'13:10',kind:'session',type:'Short talks',title:'From Pixels to Policy: AI, Earth Observation, and the Future of Agricultural Statistics for Sustainable and Resilient AgriFood Systems Transformation',room:'Room 7',duration:'60 minutes',organiser:'Chinese Academy of Sciences (CAS), Institute of Geographic Sciences and Natural Resources Research; Food and Agriculture Organization of the United Nations (FAO); Committee on Data of the International Science Council (CODATA); University of Western Australia; University Witwatersrand; Inversiones panama world coffee import and exprot,S.A. / FAO / General Authority for Statistics (GAStat-Saudi Arabia) / Statistics Indonesia (BPS)'},
    {time:'13:10',kind:'session',type:'Short talks',title:'Future-Ready Census: Innovations in census operations and communication / Probabilistic Record Linkage without IDs: Aqaba Census / Catalyst for Inclusion: Leveraging the Community-Based Monitoring System to Advance the Philippines’ Civil Registration and Vital Statistics (CRVS) Decade',room:'Room 8',duration:'60 minutes',organiser:'Departamento Administrativo Nacional de Estadística (DANE-Colombia) / Department of Statistics (DOS-Jordan) / Philippine Statistics Authority (PSA)'},
    {time:'13:10',kind:'session',type:'Demonstrations',title:'Machine learning and Artificial Intelligence for Official Statistics: Securing and Protecting Confidentiality / Statistical Guardrails for Artificial Intelligence in the Era of Data Overload / Artificial Intelligence Governance: Embedding Analytics for Public Value / Data Trustworthiness in the Age of Artificial Intelligence',room:'Room 9',duration:'60 minutes',organiser:'Adeseun Ogundoyin Polytechnic, Eruwa. Oyo State / Bu-Ali Sina University / Durham University / Imam Abdulrahman Bin Faisal University (IAU)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'AI starts with Readiness: Data, people and institutions',room:'Room 1',duration:'60 minutes',organiser:'Swiss Federal Statistical Office (SFSO); National Institute of Statistics of Rwanda (NISR); European Statistical Office (Eurostat); United Nations Regional Hub on Big Data and Data Science for Official Statistics (UNBDC); Instituto Brasileiro de Geografia e Estatística (IBGE)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'From Registration to Revenue: Why Civil Registration and Vital Statistics (CRVS) Pays Off',room:'Room 2',duration:'60 minutes',organiser:'Vital Strategies'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Settlements beyond official statistics: satellites and crowdsourcing',room:'Room 3',duration:'60 minutes',organiser:'European Commission Joint Research Center (JRC); Organisation for Economic Co-operation and Development (OECD); United Nations Human Settlements Programme (UN-Habitat); African Population and Health Research Center (APHRC); International Research Center of Big Data for Sustainable Development Goals (CBAS)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Building Artificial Intelligence readiness in Education through Data-Driven Policy',room:'Room 4',duration:'60 minutes',organiser:'Development Gateway (DG); Internation Research and Exchange Board (IREX); Queen Rania AlAbdullah Center For Education and Information Technology, Ministry of Education, Jordan'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Resiliency, Risks and Responses for Data Services',room:'Room 5',duration:'60 minutes',organiser:'World Data System, International Program Office (WDS-IPO); World Data System, Technology Office (WDS-ITO)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'To be confirmed',room:'Room 6',duration:'60 minutes',organiser:'CivicDataLab; World Bank (WB); Bill and Melinda Gates Foundation (BMGF)'},
    {time:'14:30',kind:'session',type:'Short talks',title:'Data for Resilience: Climate, Health & Food',room:'Room 7',duration:'60 minutes',organiser:'Department of Statistics (DOS-Jordan) / Drone Tech Africa / Office for National Statistics (ONS-UK); African Institute of Mathematical Sciences Rwanda'},
    {time:'14:30',kind:'session',type:'Short talks',title:'UN World Data Forum 2026 Story Map Competition / Trustworthiness and GeoArtificial Intelligence / Optimizing public connectivity investment in Togo / Advancing Statistics with Geolocated Grid Data',room:'Room 8',duration:'60 minutes',organiser:'Environmental Systems Research Institute (Esri) / International Cartographic Association (ICA); Austrian Mapping Agency; United Nations Committee of Experts on Global Geospatial Information Management (UN-GGIM) / Togo Data Lab / U.S. Census Bureau'},
    {time:'14:30',kind:'session',type:'Demonstrations',title:'From Data to Action: Live Demos from Ocean Science, AI in Climate Negotiations, and Disaster Response and Recovery',room:'Room 9',duration:'60 minutes',organiser:'Federal Ministry for Economic Cooperation and Development (BMZ), Germany; Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) / SAVEOCEAN / United Nations Development Programme (UNDP); Disaster Management Center, Sri Lanka'},
    {time:'15:45',kind:'session',type:'Plenary session',title:'Strengthening Trust in a Time of Uncertainty',room:'Plenary Room',duration:'75 minutes',organiser:'UN World Data Forum Programme Committee (UNWDF PC)'},
    {time:'18:30',kind:'session',type:'Official event',title:'To be confirmed',room:'Plenary Room',duration:'45 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia)'},
  ]},
  {label:'11 November',eyebrow:'Day 3 • Riyadh time',title:'Wednesday, 11 November 2026',events:[
    {time:'09:00',kind:'session',type:'Host-country plenary',title:'Host plenary',room:'Plenary Room',duration:'75 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'From Sevilla to Riyadh: Connecting Global Efforts on Financing Data Systems',room:'Room 1',duration:'60 minutes',organiser:'Norwegian Agency for Development Cooperation (Norad); UK Foreign, Commonwealth and Development Office (FCDO); Departamento Administrativo Nacional de Estadística (DANE-Colombia); Open Data Watch (ODW); Partnership in Statistics for Development in the 21st Century (PARIS21); United Nations Development Programme (UNDP), International Aid Transparency Initiative (IATI); Bill and Melinda Gates Foundation (BMGF); Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'The future of Household Surveys in a Changing Data and Policy Landscape: Impact, Innovation and Relevance',room:'Room 2',duration:'60 minutes',organiser:'United Nations Children\'s Fund (UNICEF); General Authority for Statistics (GAStat-Saudi Arabia)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Data-Driven Climate Action: From Environmental Monitoring to Policy',room:'Room 3',duration:'60 minutes',organiser:'Global Partnership for Sustainable Development Data (GPSDD); Inter-American Development Bank (IDB); Islamic Development Bank (IsDB); Turkish Statistical Institute; Statistical, Economic and Social Research and Training Centre for Islamic Countries (SESRIC)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Measuring the Invisible: Innovation in Measuring Corruption, Attacks on Human Right Defenders and Human Trafficking',room:'Room 4',duration:'60 minutes',organiser:'IMD; United Nations Development Programme (UNDP); Oversight and Anti-Corruption Authority (NAZAHA), Saudi Arabia; International Land Coalition (ILC); United Nations Office for the High Commissioner for Human Rights (UNOHCHR); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); Housing and Land Rights Network (HLRN) of Habitat International Coalition (HIC); Italian National Institute of Statistics (Istat)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Partnerships for Sustainable Data Systems in a Constrained Funding Environment',room:'Room 5',duration:'60 minutes',organiser:'Kenya National Bureau of Statistics (KNBS); Childrens Investment Fund Foundation (CIFF); United Nations Children\'s Fund (UNICEF); United Nations Population Fund (UNFPA); United Nations Office for the Coordination of Humanitarian Affairs (UNOCHA); Office of the United Nations Secretary-General (EOSG), Complex Risk Analytics Fund (CRAF\'d); United Nations Global Pulse (UNGP)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Landing the Global Goal on Adaptation (GGA) through Citizen-Generated Data',room:'Room 6',duration:'60 minutes',organiser:'Instituto Decodifica'},
    {time:'10:35',kind:'session',type:'Announcements',title:'Modernizing Surveys: Standards, AI and Displacement',room:'Room 7',duration:'60 minutes',organiser:'Instituto Nacional de Estadística y Geografía (INEGI-México); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); Statistical Institute of Jamaica (STATIN); National Bureau of Statistics (NBS-China); Statistics Canada; Gallup, Inc. / United Nations Development Programme (UNDP) / United Nations High Commissioner for Refugees (UNHCR)'},
    {time:'10:35',kind:'session',type:'Short talks',title:'Building Jordan’s National Interactive Data Center / Ecuador’s national strategy on data quality / Rethinking data collection systems for a globalized production landscape / Combating misuse, enhancing transparency / Building Statistical Culture as a Public Good: Bogotá’s District Statistical Plan',room:'Room 8',duration:'60 minutes',organiser:'Department of Statistics (DOS-Jordan) / Fundación Datalat / Instituto Nacional de Estadística (INE-España) / Office for Statistics Regulation, United Kingdom / Secretaria de planeación, Colombia'},
    {time:'10:35',kind:'workshop',type:'Workshop',title:'A Data Ecosystem for housing focused Policy Making',room:'Room 9',duration:'60 minutes',organiser:'University of Twente; Inter-American Development Bank (IDB); European Space Agency (ESA); United Nations Innovation Technology Accelerator for Cities (UNITAC); United Nations Human Settlements Programme (UN-Habitat); Local Governments for Sustainability (ICLEI)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'From Fragmented Data to Better Decisions: Connecting Crisis Data Ecosystems.',room:'Room 1',duration:'60 minutes',organiser:'Office of the United Nations Secretary-General (EOSG), Complex Risk Analytics Fund (CRAF\'d); United Nations Global Pulse (UNGP); United Nations Population Fund (UNFPA); United Nations Office for the Coordination of Humanitarian Affairs (UNOCHA); United Nations High Commissioner for Refugees (UNHCR); International Organisation for Migration (IOM); Danish Refugee Council (DRC)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Resilience or Retreat? Official Statistics in a Time of Crisis',room:'Room 2',duration:'60 minutes',organiser:'Open Data Watch (ODW); Partnership in Statistics for Development in the 21st Century (PARIS21); The Governance Lab (GovLab)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'AI for Better Decisions: Transforming Access to Official Data',room:'Room 3',duration:'60 minutes',organiser:'Instituto Nacional de Estadística e Informática (INEI-Perú); Sustainable Development Solutions Network (SDSN); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); Global Partnership for Sustainable Development Data (GPSDD); World Bank (WB); United Nations Development Programme (UNDP)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Inclusive Data Practice: Data Literacy & AI',room:'Room 4',duration:'60 minutes',organiser:'University of Manchester; Office for IT and eGovernment, Serbia'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Digitizing Disability Identification in Lower-Income and Fragile Settings',room:'Room 5',duration:'60 minutes',organiser:'United Nations Children\'s Fund (UNICEF); Ministry of Social Affairs, Veterans and Youth Rehabilitation (MoSVY), Cambodia; Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ); London School of Hygiene and Tropical Medicine (LSHTM)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Providing essential human and spatial context for climate data',room:'Room 6',duration:'60 minutes',organiser:'Humanitarian OpenStreetMap (HOTOSM); Wellcome Trust; Slum Dwellers International (SDI); WorldPop, University of Southampton'},
    {time:'12:00',kind:'session',type:'Announcements',title:'Bridging data and action in a modern digital landscape',room:'Room 7',duration:'60 minutes',organiser:'Office for National Statistics (ONS-UK); Central Bureau of Statistics (CBS-Nepal); HERD International; National Statistical Office (NSO-Malawi); Luke International; Centro de Educación Médica e Investigaciones Clínicas; Instituto Nacional de Estadística y Censos (INDEC-Argentina) / United Nations High Commissioner for Refugees (UNHCR) / UNHCR'},
    {time:'12:00',kind:'session',type:'Short talks',title:'CROPGRIDS Live: A data-storytelling demo of always-current global crop maps / Launching a new version of CROPGRIDS live at the UN World Data Forum / Artificial Intelligence and Big Data Technologies for monitoring the SDGs / Global Farmland Scale Measurement and the Potential of Large-Scale Grain Yield Increase',room:'Room 8',duration:'60 minutes',organiser:'Food and Agriculture Organization of the United Nations (FAO); Google / FAO; Google; Terrastack / United Nations Global Hub on Big Data and Data Science for Official Statistics (UNBDC); National Bureau of Statistics (NBS-China); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); International Research Center of Big Data for Sustainable Development Goals (CBAS); FAO; United Nations Global Geospatial Knowledge and Innovation (UNGGKIC) / Zhejiang University; UNBDC'},
    {time:'12:00',kind:'workshop',type:'Workshop',title:'Open Performance, Public Key Performance Indicators Powered by Open Data',room:'Room 9',duration:'60 minutes',organiser:'INTERMID'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'From Climate Data to Health Decisions: A Data-Centric Resilience Approach',room:'Room 1',duration:'60 minutes',organiser:'CivicDataLab; Wellcome Trust'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Leveraging the Gulf Cooperation Council (GCC) Partnership to Advance and Improve the Quality of Statistical Data',room:'Room 2',duration:'60 minutes',organiser:'Gulf Cooperation Council Statistical Center (GCC-STAT); General Authority for Statistics (GAStat-Saudi Arabia); Federal Competitiveness and Statistics Authority (FCSA-UAE); National Centre for Statistics and Information (NCSI-Oman); Planning and Statistics Authority (PSA-Qatar); Information and eGovernment Authority (IGA-Bahrain)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Data Economy in Action: Public-Private Data Partnerships for Sustainable Value',room:'Room 3',duration:'60 minutes',organiser:'Algebra Labs; Centro de Pensamiento Estratégico Internacional (Cepei); World Bank (WB); LinkedIn; Ookla; Inter-American Development Bank (IDB)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Measuring the Hidden: Innovation for Sensitive Data',room:'Room 4',duration:'60 minutes',organiser:'Inter-American Development Bank (IDB)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Sustaining the transformation of forced displacement statistics in a changing world',room:'Room 5',duration:'60 minutes',organiser:'United Nations High Commissioner for Refugees (UNHCR), Expert Group on Refugee, IDP and Statelessness Statistics (EGRISS); UK Foreign, Commonwealth and Development Office (FCDO); Kurdistan Regional Government (MOP), Iraq; Statistics Norway; World Bank-UNHCR Joint Data Center on Forced Displacement (JDC)'},
    {time:'14:30',kind:'session',type:'Thematic session',title:'Bridging the Workflow Gap in Statistical Coding',room:'Room 6',duration:'60 minutes',organiser:'International Partnership on Automatic Coding (IPAJC); Rowsquared'},
    {time:'14:30',kind:'session',type:'Short talks',title:'Visualízate: Citizen data by adolescents / Ethical Considerations in Harnessing Citizen-Generated Data to complement Official Statistics / Understanding the quality of citizen data',room:'Room 7',duration:'60 minutes',organiser:'Fundación Datalat / Kenya National Bureau of Statistics (KNBS) / World Bank (WB); International Institute for Applied Systems Analysis (IIASA); Citizen Science Africa Association (CitSci Africa)'},
    {time:'14:30',kind:'session',type:'Short talks',title:'Gender Data for “Leave No One Behind”: Data, Identity, and Inclusive Innovation in the Digital Age',room:'Room 8',duration:'60 minutes',organiser:'Global Health Advocacy Incubator / SustAInovate.Co.SA / United Nations Entity for Gender Equality and the Empowerment of Women (UN Women); United Nations Economic and Social Commission for Western Asia (UNESCWA); Gulf Cooperation Council Statistical Center (GCC-STAT) / Vital Strategies'},
    {time:'14:30',kind:'session',type:'Demonstrations',title:'Water for Sustainable Development',room:'Room 9',duration:'60 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia) / International Water Management Institute (IWMI); Intergovernmental Authority on Development (IGAD), Climate Prediction and Applications Centre (ICPAC); Volta Basin Authority (VBA); Ministry of Water and Energy, Ethiopia; African Ministers Council on Water (AMCOW) / Northwestern University, United Nations University; Gallup, Inc.; London School of Hygiene and Tropical Medicine (LSHTM); Ministry of Development Planning and Cooperation, Malawi; Yale College; International Water Management Institute (IWMI) / Northwestern University, United Nations University; King Khalid Foundation (KKF) / Togo Data Lab'},
    {time:'15:45',kind:'session',type:'Plenary session',title:'AI for data and statistics',room:'Plenary Room',duration:'75 minutes',organiser:'UN World Data Forum Programme Committee (UNWDF PC)'},
    {time:'18:00',kind:'session',type:'Official event',title:'To be confirmed',room:'Plenary Room',duration:'120 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia)'},
  ]},
  {label:'12 November — Closing',eyebrow:'Day 4 • Riyadh time',title:'Thursday, 12 November 2026',events:[
    {time:'09:00',kind:'session',type:'Plenary session',title:'Building resilience in the community',room:'Plenary Room',duration:'75 minutes',organiser:'UN World Data Forum Programme Committee (UNWDF PC)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Building a Data Governance Framework for Official Statistics: A Showcase of the UK National Statistical Institute’s Approach for Core Statistics',room:'Room 1',duration:'60 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia); Statistics Finland; United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); Office for National Statistics (ONS-UK)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Language Data Commons for Digital Diversity',room:'Room 2',duration:'60 minutes',organiser:'United Nations Educational, Scientific and Cultural Organization (UNESCO); The Governance Lab (GovLab)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Dialing up Mobile Phone Data for Statistics',room:'Room 3',duration:'60 minutes',organiser:'International Telecommunication Union (ITU); World Bank (WB); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Refugee and host  Food Security Using UN endorsed Guidelines',room:'Room 4',duration:'60 minutes',organiser:'Statistics Norway; United Nations High Commissioner for Refugees (UNHCR)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Advancing Development Measurement in Data-Scarce Contexts: Integrating Geospatial Data, Methodological Innovations, and Capacity-Building',room:'Room 5',duration:'60 minutes',organiser:'World Bank (WB); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA)'},
    {time:'10:35',kind:'session',type:'Thematic session',title:'Building Inclusive and Community Informed Disability Data Practices',room:'Room 6',duration:'60 minutes',organiser:'Australian Department of Health, Disability and Ageing; Australian Institute of Health and Welfare; Australian Bureau of Statistics (ABS); National Disability Research Partnership (NDRP)'},
    {time:'10:35',kind:'session',type:'Announcements',title:'Predicting agricultural outcomes for better decisions making in Togo / From Invisible to Counted: Measuring Nutrition for Ages 5–19 years / The Global Table: Closing the Dietary Data Gap with Low-Burden Metrics',room:'Room 7',duration:'60 minutes',organiser:'Togo Data Lab; University of California Berkeley / United Nations Children\'s Fund (UNICEF) / UNICEF; World Health Organization (WHO); Food and Agriculture Organization of the United Nations (FAO); Tufts University; University of South Carolina'},
    {time:'10:35',kind:'session',type:'Short talks',title:'Artificial Intelligence Voice Agents for Behavioral Data Collection in Kenya / Advancing people centered health data governance: civil society perspective from Kenya / Saudi Sovereign Health Data Safe Haven Proposal / Artificial Intelligence-Driven Mapping: Scaling Digital Health Equity',room:'Room 8',duration:'60 minutes',organiser:'HumanTruths; Bill and Melinda Gates Foundation (BMGF); Harvard University; Busara Center for Behavioral Economics / Kenya AIDS NGOs Consortium / King Khalid University / Youth Association for Development (YAD)'},
    {time:'10:35',kind:'workshop',type:'Workshop',title:'Human Climate Horizons Policy and Risk Lab',room:'Room 9',duration:'60 minutes',organiser:'United Nations Development Programme (UNDP), Human Development Report Office (HDRO); Climate Impact Lab; Generali'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Unlocking Data to Fuel Anti-Corruption Strategies',room:'Room 1',duration:'60 minutes',organiser:'Norwegian Agency for Development Cooperation (Norad); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); United Nations Office on Drugs and Crime (UNODC)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Powering Women’s Financial Inclusion Through Data Partnerships: A Whole of Ecosystem Approach',room:'Room 2',duration:'60 minutes',organiser:'United Nations Entity for Gender Equality and the Empowerment of Women (UN Women); World Bank (WB)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'When Warnings Speak: Artificial Intelligence-Powered Climate Informed Social Protection',room:'Room 3',duration:'60 minutes',organiser:'Sudan Urban Development Think-Tank; University of Twente; Resurgence; Sudan Social Protection Alliance'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Identifying refugees and internally displaced persons (IDPs) in surveys',room:'Room 4',duration:'60 minutes',organiser:'United Nations High Commissioner for Refugees (UNHCR), Expert Group on Refugee, IDP and Statelessness Statistics (EGRISS); United Nations Children\'s Fund (UNICEF); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA); Joint IDP Profiling Service (JIPS); Haut-Commissariat au Plan (HCP-Maroc); Somalia National Bureau of Statistics'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Making Every Dollar Count: Data and Artificial Intelligence for Development Effectiveness',room:'Room 5',duration:'60 minutes',organiser:'United Nations Development Programme (UNDP), International Aid Transparency Initiative (IATI); United Nations Department of Economic and Social Affairs (UNDESA); Saudi Fund for Development (SFD); Federal Ministry of Budget and Economic Planning, Nigeria; Federal Ministry for Economic Cooperation and Development (BMZ), Germany; Open Data Charter (ODC)'},
    {time:'12:00',kind:'session',type:'Thematic session',title:'Building from our weak spots: how citizen data and Artificial Intelligence can boost each other',room:'Room 6',duration:'60 minutes',organiser:'United Nations Development Programme (UNDP), Global Policy Centre for Governance; International Institute for Applied Systems Analysis (IIASA); Gambia Bureau of Statistics; Gambia Bureau of Statistics'},
    {time:'12:00',kind:'session',type:'Announcements',title:'From Trends to Action: Commit to Data, Global Statistics Financing and Gender Responsive Budgeting',room:'Room 7',duration:'60 minutes',organiser:'Open Data Watch (ODW); Partnership in Statistics for Development in the 21st Century (PARIS21); United Nations Entity for Gender Equality and the Empowerment of Women (UN Women)'},
    {time:'12:00',kind:'session',type:'Short talks',title:'The World Risk Poll: supporting SDGs to 2030 / SDG3 Progress and Global Benchmarking Dashboards / Health Equity Assessment Toolkit (HEAT) demonstration / Launch of 2026 WHO Health Inequality Monitoring Atlas',room:'Room 8',duration:'60 minutes',organiser:'Lloyd\'s Register Foundation; Gallup, Inc. / Ministry of Health, Saudi Arabia / World Health Organization (WHO) / WHO'},
    {time:'12:00',kind:'workshop',type:'Workshop',title:'From Data Drift to Decision Swift: The Pulsation Engine',room:'Room 9',duration:'60 minutes',organiser:'Climate Health Collective; The Golden Ratio Institute'},
    {time:'14:15',kind:'session',type:'Thematic session',title:'From Data to Decision: What Actually Makes Data Use Stick in Government?',room:'Room 1',duration:'60 minutes',organiser:'Federal Ministry for Economic Cooperation and Development (BMZ), Germany; Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ); Open Data Institute (ODI); Partnership in Statistics for Development in the 21st Century (PARIS21); Statistical Committee of the Republic of Armenia'},
    {time:'14:15',kind:'session',type:'Thematic session',title:'Citizen Data in Action: Advancing Gender, Inclusion and science',room:'Room 2',duration:'60 minutes',organiser:'International Institute for Applied Systems Analysis (IIASA); Organisation for Economic Co-operation and Development (OECD); Swiss Federal Statistical Office (SFSO); Ghana Statistical Service (GSS); United Nations Entity for Gender Equality and the Empowerment of Women (UN Women); Open Data Watch (ODW)'},
    {time:'14:15',kind:'session',type:'Thematic session',title:'Unlocking AI‑Ready Data Ecosystems through Partnerships and Interoperability',room:'Room 3',duration:'60 minutes',organiser:'Presidential Agency for International Cooperation (APC-Colombia); Global Partnership for Sustainable Development Data (GPSDD); United Nations Office for Project Services (UNOPS); McKinsey and Co.; United Nations Global Pulse (UNGP)'},
    {time:'14:15',kind:'session',type:'Thematic session',title:'50x2030 Data-Smart Agriculture: Building Inclusive AI for Better Policy and Resilient Food Systems',room:'Room 4',duration:'60 minutes',organiser:'World Bank (WB), 50X2030 initiative; Food and Agriculture Organization of the United Nations (FAO); Global Partnership for Sustainable Development Data (GPSDD); National Bureau of Statistics (NBS-Tanzania); University of Bristol; Atlas AI P.B.C.'},
    {time:'14:15',kind:'session',type:'Thematic session',title:'Digital Innovation for 2030 Census Data in Africa',room:'Room 5',duration:'60 minutes',organiser:'WorldPop, University of Southampton; United Nations Population Fund (UNFPA); Environmental Systems Research Institute (Esri)'},
    {time:'14:15',kind:'session',type:'Thematic session',title:'To be confirmed',room:'Room 6',duration:'60 minutes',organiser:'U.S. Census Bureau'},
    {time:'14:15',kind:'session',type:'Short talks',title:'Implementing Degree of Urbanisation (DEGURBA) in Jordan for selected SDG estimation / Utilization of Mobile Positioning Data in Estimating the Impact of Moving the Capital City of Indonesia on Congestion in Jakarta / Smart Territories in Action: Lessons from Developing Bogotá’s Digital Twin',room:'Room 7',duration:'60 minutes',organiser:'Department of Statistics (DOS-Jordan) / Statistics Indonesia (BPS) / Secretaria de planeación, Colombia'},
    {time:'14:15',kind:'session',type:'Short talks',title:'Children in China: An Atlas of Social Indicators / Bridging Data Gaps: National Bureau of Statistics-UN Joint Data Project in China / The UNFPA Youth Reproductive Choices Survey: New Evidence for Population Research and Policy / From Data to Decision: Visualizing Causal Artificial Intelligence for Policy Decisions',room:'Room 8',duration:'60 minutes',organiser:'United Nations Children\'s Fund (UNICEF) / UNICEF; United Nations Population Fund (UNFPA); National Bureau of Statistics (NBS-China) / UNFPA / Yale College'},
    {time:'14:15',kind:'session',type:'Demonstrations',title:'Auditing Generative Artificial Intelligence: The Fidelity Standard / The Application of Artificial Intelligence in Government Statistics in China: Current Status, Achievements, and Future Directions / Copyright, Ownership and Artificial Intelligence Synthetic Data / Synthetic Data: Better Quality, Lower Cost',room:'Room 9',duration:'60 minutes',organiser:'King Abdulaziz University, Faculty of Economics and Administration; Dar Al-Hekma University / National Bureau of Statistics (NBS-China), Institute of Statistical Science / Prince Sultan University, College of Law / SAS Institute Inc.'},
    {time:'15:30',kind:'session',type:'Closing session',title:'Closing ceremony',room:'Plenary Room',duration:'30 minutes',organiser:'General Authority for Statistics (GAStat-Saudi Arabia); United Nations Statistics Division - Department of Economic and Social Affairs (UNSD-DESA)'},
  ]},
];

const icons={pin:'<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',calendar:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>'};
const timeline=document.querySelector('.timeline'),dayTitle=document.querySelector('.agenda .title h2'),dayEyebrow=document.querySelector('.agenda .title small'),programmeNote=document.querySelector('.program-note span');
let selectedDay=0,activeKind='session';
const metadata=(event,date)=>`<p class="session-meta"><span>${icons.pin}${event.room}</span><span>${icons.clock}${event.duration}</span><span>${icons.calendar}${date}</span></p>`;
function sessionDetails(event,index){const portraits=[['speaker-saudi-man-unified.png','speaker-saudi-woman-unified.png'],['speaker-international-woman-unified.png','speaker-saudi-man-unified.png'],['speaker-international-man-unified.png','speaker-saudi-woman-unified.png'],['speaker-saudi-woman-unified.png','speaker-international-man-unified.png']];const [speakerPhoto,moderatorPhoto]=portraits[(selectedDay+index)%portraits.length];const photo=(file,label)=>`<span class="avatar portrait"><img src="assets/${file}" alt="${label}" loading="lazy"><i>Concept image</i></span>`;return `<div class="session-people"><div class="person-block"><small class="person-role">Speaker</small><div class="person-row">${photo(speakerPhoto,'Concept portrait for the speaker')}<div><b>To be announced</b><p>Speaker name</p><em>Title and organisation</em></div></div></div><div class="person-block moderator"><small class="person-role">Moderator</small><div class="person-row">${photo(moderatorPhoto,'Concept portrait for the moderator')}<div><b>To be announced</b><p>Moderator name</p><em>Title and organisation</em></div></div></div></div><div class="session-description"><small>Organiser</small><p>${event.organiser||'To be announced'}</p></div>`}
function workshopDetails(event){return `<div class="workshop-layout"><div class="workshop-topics"><h4>Organiser</h4><p>${event.organiser||'To be announced'}</p></div><aside class="workshop-meta"><ul><li><i>⌖</i><span><small>Room</small><b>${event.room}</b></span></li><li><i>▣</i><span><small>Date</small><b>${programme[selectedDay].title}</b></span></li><li><i>◷</i><span><small>Time</small><b>${event.time}</b></span></li><li><i>◴</i><span><small>Duration</small><b>${event.duration}</b></span></li></ul></aside></div>`}
function renderProgramme(){const day=programme[selectedDay];dayTitle.textContent=day.title;dayEyebrow.textContent=day.eyebrow;programmeNote.textContent='Official programme of the 6th United Nations World Data Forum 2026.';const visible=day.events.filter(event=>event.kind===activeKind);timeline.innerHTML=visible.map((event,index)=>`<article class="event" data-kind="${event.kind}"><time>${event.time}</time><div class="card"><button class="expand" aria-label="Open details">＋</button><div class="event-head">${event.kind==='workshop'?`<b class="workshop-number">${String(index+1).padStart(2,'0')}</b>`:''}<span>${event.type}</span><h3>${event.title}</h3>${metadata(event,day.title)}</div><div class="details">${event.kind==='workshop'?workshopDetails(event):sessionDetails(event,index)}</div></div></article>`).join('');timeline.querySelectorAll('.event .card').forEach(card=>{card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-expanded','false')});if(!visible.length)timeline.innerHTML='<div class="empty-programme">No events are available in this category for the selected day.</div>'}
document.addEventListener('click',event=>{const card=event.target.closest('.event .card');if(!card)return;const item=card.closest('.event');timeline.querySelectorAll('.event.open').forEach(openItem=>{if(openItem===item)return;openItem.classList.remove('open');openItem.querySelector('.expand').textContent='＋';openItem.querySelector('.card').setAttribute('aria-expanded','false')});item.classList.toggle('open');card.querySelector('.expand').textContent=item.classList.contains('open')?'−':'＋';card.setAttribute('aria-expanded',String(item.classList.contains('open')))});
document.addEventListener('keydown',event=>{const card=event.target.closest?.('.event .card');if(!card||!['Enter',' '].includes(event.key))return;event.preventDefault();card.click()});
document.querySelectorAll('.filter button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter button').forEach(item=>item.classList.remove('active'));button.classList.add('active');activeKind=button.dataset.kind;renderProgramme()}));
const nativeDaySelect=document.querySelector('#programme-day');
if(nativeDaySelect){
  nativeDaySelect.innerHTML=programme.map((day,index)=>`<option value="${index}" ${index===selectedDay?'selected':''}>${day.label}</option>`).join('');
  nativeDaySelect.classList.add('native-day-select');
  const custom=document.createElement('div');
  custom.className='programme-day-tabs';
  custom.setAttribute('role','tablist');
  custom.setAttribute('aria-label','Select programme day');
  nativeDaySelect.after(custom);
  programme.forEach((day,index)=>{
    const option=document.createElement('button');
    option.type='button';
    option.className='programme-day-tab'+(index===selectedDay?' active':'');
    option.setAttribute('role','tab');
    option.setAttribute('aria-selected',String(index===selectedDay));
    option.innerHTML=`<span>Nov ${9+index}</span><small>${index===0?'Opening':index===3?'Closing':'Programme'}</small>`;
    option.onclick=()=>{
      selectedDay=index;
      nativeDaySelect.value=index;
      custom.querySelectorAll('.programme-day-tab').forEach((item,itemIndex)=>{
        const active=itemIndex===index;
        item.classList.toggle('active',active);
        item.setAttribute('aria-selected',String(active));
      });
      renderProgramme();
      option.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    };
    custom.appendChild(option);
  });
}
const menuButton=document.querySelector('.menu'),navLinks=document.querySelector('header .links');if(menuButton&&!menuButton.querySelector('span'))menuButton.innerHTML='<span></span><span></span><span></span>';menuButton?.addEventListener('click',()=>{const open=navLinks.classList.toggle('mobile-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu')});
document.addEventListener('keydown',event=>{const card=event.target.closest?.('.event .card');if(card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();card.click()}if(event.key==='Escape'){document.querySelector('.custom-day-select')?.classList.remove('open');document.querySelector('.day-select-button')?.setAttribute('aria-expanded','false');navLinks?.classList.remove('mobile-open');menuButton?.setAttribute('aria-expanded','false')}});
const dialog=document.querySelector('#registration');document.querySelectorAll('.open-form').forEach(button=>button.onclick=()=>dialog?.showModal());document.querySelector('.close')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog?.querySelector('form')?.addEventListener('submit',event=>{event.preventDefault();event.currentTarget.hidden=true;dialog.querySelector('.success').hidden=false});dialog?.querySelector('.done')?.addEventListener('click',()=>dialog.close());
renderProgramme();

function initPageLoader(){
  const isArabic=document.documentElement.lang==='ar';
  const loader=document.createElement('div');
  loader.className='page-loader';loader.setAttribute('role','status');loader.setAttribute('aria-label',isArabic?'جاري تحميل الموقع':'Loading website');
  const logoSrc='assets/forum-mark-loader.svg?v=1';
  loader.innerHTML=`<div class="loader-pattern" aria-hidden="true"></div><div class="loader-content"><div class="loader-forum-only" style="--loader-logo:url('${logoSrc}')" aria-hidden="true"></div><div class="loader-progress"><i></i></div><div class="loader-year">RIYADH <span>•</span> 2026</div></div>`;
  document.body.prepend(loader);document.documentElement.classList.add('is-loading');const started=performance.now();let finished=false;
  const finish=()=>{if(finished)return;finished=true;setTimeout(()=>{loader.classList.add('is-leaving');document.documentElement.classList.remove('is-loading');setTimeout(()=>loader.remove(),700)},Math.max(0,1250-(performance.now()-started)))};
  if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true});setTimeout(finish,3000);
}
initPageLoader();


/* Curated Saudi Statistics Forum montage v39 */
(function(){
  var videos=[].slice.call(document.querySelectorAll('.hero-video .hero-clip'));
  if(videos.length<2)return;
  if(window.matchMedia('(max-width:750px)').matches){videos[0].muted=true;videos[0].loop=true;videos[0].classList.add('active');videos[0].play().catch(function(){});return}
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){videos.forEach(function(v){v.pause()});return}
  var sequence=[
    {video:0,start:0,end:6.65},
    {video:1,start:11.7,end:14.4},
    {video:1,start:19.55,end:21.7},
    {video:1,start:39.05,end:42.15},
    {video:1,start:55.05,end:58.0}
  ];
  var current=0,busy=false;videos.forEach(function(v){v.muted=true});
  function activate(v){videos.forEach(function(x){x.classList.toggle('active',x===v);if(x!==v)window.setTimeout(function(){x.pause()},760)})}
  function start(i){current=i%sequence.length;var s=sequence[current],v=videos[s.video];busy=true;function seek(){v.currentTime=s.start;v.play().catch(function(){})}if(v.readyState<1)v.addEventListener('loadedmetadata',seek,{once:true});else seek();var done=function(){v.removeEventListener('seeked',done);activate(v);busy=false};v.addEventListener('seeked',done)}
  videos.forEach(function(v){v.addEventListener('timeupdate',function(){var s=sequence[current];if(!busy&&videos[s.video]===v&&v.currentTime>=s.end-.08)start(current+1)})});
  videos[0].addEventListener('loadedmetadata',function(){start(0)},{once:true});window.setTimeout(function(){if(videos[0].duration>0)start(0)},1500);
})();

/* Partners section heading, aligned with the shared Saudi visual identity. */
(function addPartnersHeading(){
  const section=document.querySelector('.partners');
  if(!section||section.querySelector('.partners-heading'))return;
  section.insertAdjacentHTML('afterbegin','<div class="partners-heading"><div><span>Partners in success</span><h2>Partners</h2></div><small>A collaborative ecosystem supporting the forum</small></div>');
})();

/* Use the supplied official venue photograph in the venue showcase. */
const venuePhoto=document.querySelector('.venue-showcase .venue-photo img');
if(venuePhoto){
  venuePhoto.src='assets/sofitel-riyadh-venue-dark.png';
  venuePhoto.alt='Sofitel Riyadh Hotel and Convention Centre';
}

/* Speaker profile cards and accessible profile dialog. */
(function initSpeakerProfiles(){
  const grid=document.querySelector('.speakers-grid');
  if(!grid)return;
  const unifiedImages={
    'assets/speaker-saudi-woman.webp':'assets/speaker-saudi-woman-unified.png',
    'assets/speaker-saudi-man.webp':'assets/speaker-saudi-man-unified.png',
    'assets/speaker-international-woman.webp':'assets/speaker-international-woman-unified.png',
    'assets/speaker-international-man.webp':'assets/speaker-international-man-unified.png'
  };
  grid.querySelectorAll('.speaker-card').forEach(card=>{
    const image=unifiedImages[card.dataset.image];
    if(!image)return;
    const portrait=card.querySelector('.speaker-image img');
    if(!portrait)return;
    const ready=new Image();
    ready.onload=()=>{portrait.src=image;card.dataset.image=image;};
    ready.src=image;
  });
  const additional=[
    {name:'Dr Reem Alsubaie',role:'Director of Responsible AI',bio:'A specialist in responsible AI and algorithmic governance, developing trusted solutions that improve decision quality and public services.',image:'assets/speaker-saudi-woman-2.png'},
    {name:'Khalid Aldosari',role:'Head of Data Platform Engineering',bio:'An expert in national data platforms and secure cloud infrastructure, leading technical teams that turn large-scale data into useful products.',image:'assets/speaker-saudi-man-2.png'},
    {name:'Jonathan Reed',role:'US Data Governance Expert',bio:'An adviser in data governance and digital regulation who has contributed to international initiatives on data sharing, privacy and institutional trust.',image:'assets/speaker-american-man.png'},
    {name:'Dr Lucía Navarro',role:'Spanish Digital Innovation Researcher',bio:'A researcher in digital innovation and open data, developing collaborative models that connect research, public policy and social impact.',image:'assets/speaker-spanish-woman.png'}
  ];
  additional.forEach(person=>grid.insertAdjacentHTML('beforeend',`<button class="speaker-card" type="button" data-name="${person.name}" data-role="${person.role}" data-bio="${person.bio}" data-image="${person.image}"><span class="speaker-image"><img src="${person.image}" alt="${person.name}"></span><span class="speaker-info"><b>${person.name}</b><small>${person.role}</small><i>View profile →</i></span></button>`));
  const cards=[...grid.querySelectorAll('.speaker-card')];
  if(!cards.length)return;
  const controls=document.createElement('div');
  controls.className='speakers-controls';
  controls.innerHTML='<button type="button" class="speaker-prev" aria-label="Previous speaker">←</button><button type="button" class="speaker-next" aria-label="Next speaker">→</button>';
  document.querySelector('.speakers-heading')?.appendChild(controls);
  let activeIndex=0,timer;
  const goTo=index=>{
    activeIndex=(index+cards.length)%cards.length;
    const card=cards[activeIndex];
    const gridBox=grid.getBoundingClientRect(),cardBox=card.getBoundingClientRect();
    const delta=cardBox.left-gridBox.left-(gridBox.width-cardBox.width)/2;
    grid.scrollBy({left:delta,behavior:'smooth'});
  };
  controls.querySelector('.speaker-prev').addEventListener('click',()=>goTo(activeIndex-1));
  controls.querySelector('.speaker-next').addEventListener('click',()=>goTo(activeIndex+1));
  const stop=()=>clearInterval(timer),start=()=>{stop();timer=setInterval(()=>goTo(activeIndex+1),3800)};
  grid.addEventListener('mouseenter',stop);grid.addEventListener('mouseleave',start);grid.addEventListener('focusin',stop);grid.addEventListener('focusout',start);grid.addEventListener('touchstart',stop,{passive:true});grid.addEventListener('touchend',start,{passive:true});
  const observer=new IntersectionObserver(entries=>entries[0].isIntersecting?start():stop(),{threshold:.35});observer.observe(grid);
  const profile=document.createElement('dialog');
  profile.className='speaker-profile-dialog';
  profile.setAttribute('aria-labelledby','speaker-profile-name');
  profile.innerHTML='<button class="speaker-dialog-close" type="button" aria-label="Close">×</button><div class="speaker-dialog-layout"><div class="speaker-dialog-photo"><img alt=""></div><div class="speaker-dialog-copy"><small>Speaker profile</small><h2 id="speaker-profile-name"></h2><h3></h3><p></p></div></div>';
  document.body.appendChild(profile);
  const image=profile.querySelector('img'),name=profile.querySelector('h2'),role=profile.querySelector('h3'),bio=profile.querySelector('p');
  cards.forEach(card=>card.addEventListener('click',()=>{
    image.src=card.dataset.image;image.alt=card.dataset.name;
    name.textContent=card.dataset.name;role.textContent=card.dataset.role;bio.textContent=card.dataset.bio;
    profile.showModal();
  }));
  profile.querySelector('.speaker-dialog-close').addEventListener('click',()=>profile.close());
  profile.addEventListener('click',event=>{if(event.target===profile)profile.close()});
})();
/* Keep registration choices in the visual space formerly occupied by the event ticket. */
const heroRegistrationModes=document.querySelector('.hero-v2-content .hero-registration-modes');
const mainHero=document.querySelector('.hero-v2');
if(heroRegistrationModes&&mainHero)mainHero.appendChild(heroRegistrationModes);
/* Reliable muted hero playback on mobile browsers. */
(function initMobileHeroVideo(){
  const videos=[...document.querySelectorAll('.hero-video .hero-clip')];
  if(!videos.length)return;
  videos.forEach(video=>{
    video.muted=true;
    video.defaultMuted=true;
    video.playsInline=true;
    video.setAttribute('muted','');
    video.setAttribute('playsinline','');
    video.setAttribute('webkit-playsinline','');
    video.setAttribute('autoplay','');
  });
  const playActive=()=>{
    const active=document.querySelector('.hero-video .hero-clip.active')||videos[0];
    active.play().catch(()=>{});
  };
  if(matchMedia('(max-width:750px)').matches){
    videos[0].loop=true;
    videos.slice(1).forEach(video=>video.pause());
    videos[0].classList.add('active');
    playActive();
  }
  document.addEventListener('touchstart',playActive,{once:true,passive:true});
  document.addEventListener('click',playActive,{once:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)playActive()});
})();

/* Shared accessibility tools and back-to-top control. */
(function initAccessibilityTools(){
  if(document.querySelector('.a11y-dock'))return;
  const ar=document.documentElement.lang==='ar';
  const dock=document.createElement('div');
  dock.className='a11y-dock';
  dock.innerHTML=`
    <button class="a11y-toggle" type="button" aria-expanded="false" aria-label="${ar?'إمكانية الوصول':'Accessibility'}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2.2"/><path d="M5 8.5h14M12 7v5m0 0-4 8m4-8 4 8"/></svg>
    </button>
    <button class="back-to-top" type="button" aria-label="${ar?'العودة إلى أعلى الصفحة':'Back to top'}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>
    </button>
    <section class="a11y-panel" aria-label="${ar?'إعدادات إمكانية الوصول':'Accessibility settings'}" hidden>
      <div class="a11y-panel-head"><b>${ar?'إمكانية الوصول':'Accessibility'}</b><button type="button" class="a11y-close" aria-label="${ar?'إغلاق':'Close'}">×</button></div>
      <div class="a11y-font-controls">
        <button type="button" data-a11y="font-down" aria-label="${ar?'تصغير الخط':'Decrease text size'}">A−</button>
        <button type="button" data-a11y="font-up" aria-label="${ar?'تكبير الخط':'Increase text size'}">A+</button>
      </div>
      <button type="button" class="a11y-option" data-a11y="contrast"><span>${ar?'تباين عالٍ':'High contrast'}</span><i aria-hidden="true"></i></button>
      <button type="button" class="a11y-option" data-a11y="motion"><span>${ar?'إيقاف الحركة':'Reduce motion'}</span><i aria-hidden="true"></i></button>
      <button type="button" class="a11y-reset" data-a11y="reset">${ar?'إعادة الإعدادات':'Reset settings'}</button>
    </section>`;
  document.body.appendChild(dock);
  const root=document.documentElement,toggle=dock.querySelector('.a11y-toggle'),panel=dock.querySelector('.a11y-panel'),topButton=dock.querySelector('.back-to-top');
  const key='unwdf-accessibility';
  let settings={font:0,contrast:false,motion:false};
  try{settings=Object.assign(settings,JSON.parse(localStorage.getItem(key)||'{}'))}catch(e){}
  const save=()=>{try{localStorage.setItem(key,JSON.stringify(settings))}catch(e){}};
  const apply=()=>{
    root.classList.toggle('a11y-font-large',settings.font===1);
    root.classList.toggle('a11y-font-larger',settings.font===2);
    root.classList.toggle('a11y-high-contrast',settings.contrast);
    root.classList.toggle('a11y-reduce-motion',settings.motion);
    dock.querySelector('[data-a11y="contrast"]').classList.toggle('active',settings.contrast);
    dock.querySelector('[data-a11y="motion"]').classList.toggle('active',settings.motion);
    document.querySelectorAll('video').forEach(video=>{if(settings.motion)video.pause()});
    save();
  };
  const close=()=>{panel.hidden=true;toggle.setAttribute('aria-expanded','false')};
  toggle.addEventListener('click',()=>{const opening=!panel.hidden;panel.hidden=opening;toggle.setAttribute('aria-expanded',String(!opening))});
  dock.querySelector('.a11y-close').addEventListener('click',close);
  dock.addEventListener('click',event=>{
    const action=event.target.closest('[data-a11y]')?.dataset.a11y;if(!action)return;
    if(action==='font-up')settings.font=Math.min(2,settings.font+1);
    if(action==='font-down')settings.font=Math.max(0,settings.font-1);
    if(action==='contrast')settings.contrast=!settings.contrast;
    if(action==='motion')settings.motion=!settings.motion;
    if(action==='reset')settings={font:0,contrast:false,motion:false};
    apply();
  });
  document.addEventListener('click',event=>{if(!dock.contains(event.target))close()});
  topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:settings.motion?'auto':'smooth'}));
  const updateTop=()=>topButton.classList.toggle('visible',window.scrollY>520);
  window.addEventListener('scroll',updateTop,{passive:true});updateTop();apply();
})();
