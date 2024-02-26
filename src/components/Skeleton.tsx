import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

function SkeletonChildrenDemo() {

  return (
    <div className='flex flex-col justify-center items-center'>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
        <Box sx={{ margin: 1 }}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>

        </Box>
        <Box sx={{ width: '90%' }}>

            <Skeleton width="90%">
              <Typography>.</Typography>
            </Skeleton>
         
        </Box>
      </Box>

        <Skeleton variant="rectangular" width="90%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>

    </div>
  );
}

export default function SkeletonChildren() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo />
        <SkeletonChildrenDemo />
        <SkeletonChildrenDemo />
      </Grid>
    </Grid>
  );
}