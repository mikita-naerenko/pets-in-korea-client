import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

export function RecommendationsSkeleton() {
  return (
    <ListItemButton divider>
      <ListItemAvatar>
        <Skeleton variant="rectangular" width={50} height={40} />
      </ListItemAvatar>

      <ListItemText>
        <Skeleton variant="text" width={210} height={20} />
        <Skeleton variant="text" width={210} height={20} />
      </ListItemText>
    </ListItemButton>
  );
}
