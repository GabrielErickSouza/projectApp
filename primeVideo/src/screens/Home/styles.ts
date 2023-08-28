import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    backgroundColor:#232F3E;
    alignItems: flex-start;
`

export const Header = styled.View`
    width: 100%;
    paddingTop: 80px;
    alignItems: center;
    justifyContent: center;
`
export const Category = styled.View`
    width: 100%;
    flexDirection: row;
    justifyContent: space-evenly;
    marginTop: 30px;
    marginBottom: 15px;
`
export const CategoryText = styled.Text`
    fontSize: 14px;
    fontWeight: 700;
    color: #FFF;
`
export const AmazonLogoImg = styled.Image`
    marginTop: -32px;
    marginLeft: 30px;
`
export const MovieImgThumbnail = styled.TouchableOpacity`
    width: 100%;
    alignItems: center;
`

export const MovieText = styled.Text`
    color: #ffff;
    fontSize: 18px;
    fontWeight:700;
    padding: 15px;
`
