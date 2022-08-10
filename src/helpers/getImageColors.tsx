import ImageColors from 'react-native-image-colors';
import { COLORS } from '../theme/constants';


export const getImageColors = async (uri: string) => {
    const result = await ImageColors.getColors(uri, {
        fallback: COLORS.gray,
        cache: true,
    });

    let primary;
    let secondary;

    switch (result.platform) {
        case 'android':
            primary = result.dominant;
            secondary = result.average;
            break;

        case 'ios':
            primary = result.primary;
            secondary = result.secondary;
            break;

        default:
            primary = result.vibrant;
            secondary = result.dominant;
            break;
    }

    return [primary, secondary];

};
