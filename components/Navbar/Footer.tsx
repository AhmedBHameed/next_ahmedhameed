import {Typography, IconButton} from '@material-ui/core';
import styled from 'styled-components';
import {ReactComponent as Heart} from '../../public/heart.svg';
import nextI18next, {useTranslation} from '../../i18n';
import {GitHub, Email, LinkedIn} from '@material-ui/icons';
import {NextPage} from 'next';

// iconLinks: {
//     color: "inherit",
//     textDecoration: "none",
//     fontSize: 0
//   },
//   copyRights: {
//     position: "absolute",
//     bottom: "3rem"
//   },
//   nameColor: {
//     color: theme.palette.secondary.main
//   },

const Container = styled.div`
  text-align: center;
`;

const HeartSvg = styled(Heart)`
  color: red;
  width: 1.5rem;
  height: 1.5rem;
  display: inline;
`;

interface IconLinkProps {
  href: string;
}

const IconLinks: NextPage<IconLinkProps> = ({href, children}) => {
  return (
    <IconButton target="blank" href={href} size="small">
      {children}
    </IconButton>
  );
};

const Footer = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Typography variant="caption" display="block" gutterBottom>
        {t('footer.line1')}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {t('footer.line2.made')}&nbsp;
        <HeartSvg />
        &nbsp;{t('footer.line2.by')}&nbsp;
        {/* <span className={classes.nameColor}>{t('footer.line2.owner')}</span> */}
      </Typography>
      <div>
        <IconLinks href={t('footer.socialLinks.linkedin')}>
          <LinkedIn />
        </IconLinks>

        <IconLinks href={t('footer.socialLinks.github')}>
          <GitHub />
        </IconLinks>

        <IconLinks href={t('footer.socialLinks.email')}>
          <Email />
        </IconLinks>
      </div>
    </Container>
  );
};

// Footer.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

export default nextI18next.withTranslation('common')(Footer);
