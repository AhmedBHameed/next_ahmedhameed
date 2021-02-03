import Joi from 'joi';
import {NextPage} from 'next';
import {useCallback, useContext, useEffect, useMemo, useRef} from 'react';
import {useForm} from 'react-hook-form';
import MapGL, {Marker} from 'react-map-gl';
import AhmedhammedNavigation from '../../../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation';
import AsideBar from '../../../components/AsideBar/AsideBar';

import {BaseButton} from '../../../components/Buttons';
import {FormControl, Textarea, TextField} from '../../../components/Forms';
import InfoCard from '../../../components/InfoCard/InfoCard';
import {ThemeContext} from '../../../components/ThemeSwitcher/ThemeContext';
import environment from '../../../config/environment';
import EmailSvg from '../../../statics/email.svg';
import FlourishSvg from '../../../statics/flourish.svg';
import LocationSvg from '../../../statics/location.svg';
import PhoneSvg from '../../../statics/phone.svg';
import {joiResolver} from '../../../util/joiResolver';

const viewport = {
  width: '100%',
  height: 500,
  latitude: 48.17986781516112,
  longitude: 16.359264050177973,
  zoom: 14,
};

interface ContactFormData {
  email: string;
  name: string;
  subject: string;
  message: string;
}

const ContactMe: NextPage = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const theme = useContext(ThemeContext);

  const contactSchema = useMemo(
    () =>
      Joi.object({
        email: Joi.string()
          .email({tlds: {allow: false}})
          .required(),
        name: Joi.string().required(),
        subject: Joi.string().required(),
        message: Joi.string().required(),
      }),
    []
  );

  const {formState, errors, register, handleSubmit} = useForm<ContactFormData>({
    resolver: joiResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
  });

  const submit = useCallback((formData: ContactFormData) => {
    console.log(formData);
  }, []);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
      register(emailInputRef.current, {required: true});
    }
  }, [emailInputRef.current]);

  const inputClassName = 'p-2 text-subject bg-aside border-2 border-gray-400 border-opacity-60 w-full';

  return (
    <AsideBar asideNavigationComponent={<AhmedhammedNavigation />}>
      <div className="p-8 lg:px-52 h-96 bg-secondary relative flex flex-col justify-center items-center">
        <FlourishSvg className="text-secondary opacity-20 transform rotate-90 absolute top-2 right-2 w-40 h-40 md:w-52 md:h-52 lg:w-80 lg:h-80" />
        <FlourishSvg className="text-secondary opacity-20 transform -rotate-90 absolute bottom-2 left-2 w-40 h-40 md:w-52 md:h-52 lg:w-80 lg:h-80" />

        <InfoCard
          className="w-64 md:w-96 lg:self-start"
          info="Wiedner Hauptstraße, Austria, Vienna."
          IconComponent={<LocationSvg className="w-3/5 text-subject" />}
        />
        <InfoCard
          className="w-64 md:w-96 lg:self-center"
          info="+43 677-6276-8620"
          IconComponent={<PhoneSvg className="w-3/5 text-subject" />}
        />
        <InfoCard
          className="w-64 md:w-96 lg:self-end"
          info="contact.kakiee@gmail.com"
          IconComponent={<EmailSvg className="w-3/5 text-subject" />}
        />
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit(submit)}>
          <div className="sm:grid md:grid-cols-2 sm:gap-4 sm:items-start">
            <div className="sm:grid md:grid-cols-1 sm:gap-2 sm:items-start">
              <FormControl>
                <TextField
                  className={inputClassName}
                  placeholder="Email address"
                  error={!!errors.email}
                  name="email"
                  type="email"
                  autocomplete="email"
                  ref={emailInputRef}
                />
              </FormControl>

              <FormControl>
                <TextField type="text" className={inputClassName} placeholder="Your name" name="name" ref={register} />
              </FormControl>

              <FormControl>
                <TextField type="text" className={inputClassName} placeholder="Subject" name="subject" ref={register} />
              </FormControl>
            </div>

            <div className="h-full">
              <FormControl className="h-full">
                <Textarea
                  placeholder="Message"
                  name="message"
                  className="p-2 text-subject bg-aside border-2 border-gray-400 border-opacity-60 h-full"
                  ref={register}
                />
              </FormControl>
            </div>

            <div className="col-span-2 mt-3">
              <BaseButton
                type="submit"
                disabled={!formState.isValid}
                className="w-full justify-center uppercase bg-subject text-reverse"
                Icon={EmailSvg}
              >
                Contact Me
              </BaseButton>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-3">
        <MapGL
          mapboxApiAccessToken={environment.mapboxApiAccessToken}
          {...viewport}
          // onViewportChange={setViewport}
          // zoom={viewport.viewport.zoom}
          width="100%"
          height="500px"
          mapStyle={`mapbox://styles/mapbox/${theme.darkTheme ? 'dark-v9' : 'light-v8'}`}
        >
          <Marker
            longitude={viewport.longitude}
            latitude={viewport.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable
            // onDragStart={this._onMarkerDragStart}
            // onDrag={this._onMarkerDrag}
            // onDragEnd={_onMarkerDragEnd}
          >
            <svg
              height={20}
              viewBox="0 0 24 24"
              style={{
                fill: '#d00',
                stroke: 'none',
              }}
            >
              <path
                d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
              />
            </svg>
          </Marker>
        </MapGL>
      </div>
    </AsideBar>
  );
};

export default ContactMe;
