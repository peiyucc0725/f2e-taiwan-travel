import { Box, Divider } from '@mui/material';

const Tags = (props) => {
    return (
        <div className="tags">
            {props.items.map((tagGroups, gidx) => (
                <Box className="tag-groups" key={gidx}>
                    {(gidx !== 0) &&
                        <Divider sx={{ mx: '12px' }} orientation="vertical" flexItem />
                    }
                    <Box className="tag-groups">
                        {tagGroups.map((tag,index) => (
                            <div className="tag-item" key={index}>{tag.text}</div>
                        ))}
                    </Box>
                </Box>
            ))}
        </div>
    )
}

export default Tags