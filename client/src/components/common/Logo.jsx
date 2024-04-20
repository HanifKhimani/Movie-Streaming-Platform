import { Typography, useTheme } from '@mui/material';
import appLogo from "../../assets/easymovieLogo.png"
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
    <div onClick={()=>{navigate('/')}} style={{cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center', }}>
    <img src={appLogo} alt='hello' style={{marginRight: '10px'}} height={40} width={40} />
      <h1 style={{fontSize:'25px', paddingTop:'15px'}} >EasyWatch</h1>
    </div>
      {/* <span style={{ color: theme.palette.primary.main }}>Watch</span> */}
    </Typography>
  );
};

export default Logo;
