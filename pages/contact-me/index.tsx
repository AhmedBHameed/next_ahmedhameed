import {joiResolver} from '@hookform/resolvers/joi';
import {NextPage} from 'next';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {useForm} from 'react-hook-form';
import MapGL, {Marker} from 'react-map-gl';
import {ulid} from 'ulid';

import AhmedhammedNavigation from '../../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation';
import AsideBar from '../../components/AsideBar/AsideBar';
import {BaseButton} from '../../components/Buttons';
import {FormControl, Textarea, TextField} from '../../components/Form';
import InfoCard from '../../components/InfoCard/InfoCard';
import useNotification from '../../components/Notification/Hooks/NotificationHook';
import {
  EmailSvg,
  FlourishSvg,
  LocationSvg,
  PhoneSvg,
} from '../../components/SVGs';
import {useSwitcherTheme} from '../../components/ThemeSwitcher/ThemeSwitcherContext';
import environment from '../../config/environment';
import {ContactInput, useContactMeMutation} from '../../graphql/queries';
import {clsx} from '../../util/clsx';
import {Joi, requiredEmail, requiredString} from '../../util/validations';

const viewport = {
  width: '100%',
  height: 500,
  latitude: 48.17986781516112,
  longitude: 16.359264050177973,
  zoom: 14,
};

const ContactMe: NextPage = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const {triggerNotification} = useNotification();
  const {darkTheme} = useSwitcherTheme();

  const [addContact] = useContactMeMutation({
    onCompleted: ({contactMe}) => {
      triggerNotification({
        type: 'success',
        message: contactMe.message,
      });
    },
    onError: () => {
      triggerNotification({
        type: 'error',
        message:
          'Oops! something went wrong, you can send direct email instead',
      });
    },
  });

  const contactSchema = useMemo(
    () =>
      Joi.object({
        email: requiredEmail(),
        name: requiredString(),
        subject: requiredString(),
        message: requiredString(),
      }),
    []
  );

  const {
    formState: {errors, isValid},
    register,
    handleSubmit,
  } = useForm<ContactInput>({
    resolver: joiResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      id: '',
      email: '',
      name: '',
      subject: '',
      message: '',
    },
  });

  const submit = useCallback(
    (formData: ContactInput) => {
      try {
        addContact({
          variables: {
            contact: {
              ...formData,
              id: ulid(),
            },
          },
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    [addContact]
  );

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
      register('email', {required: true});
    }
  }, [register]);

  const inputClassName =
    'p-2 text-subject bg-aside border-2 border-gray-400 border-opacity-60 w-full';

  return (
    <AsideBar asideNavigationComponent={<AhmedhammedNavigation />}>
      <div className="p-8 lg:px-52 h-96 bg-secondary relative flex flex-col justify-center items-center">
        <FlourishSvg className="text-secondary opacity-20 transform rotate-90 absolute top-2 right-2 w-40 h-40 md:w-52 md:h-52 lg:w-80 lg:h-80" />
        <FlourishSvg className="text-secondary opacity-20 transform -rotate-90 absolute bottom-2 left-2 w-40 h-40 md:w-52 md:h-52 lg:w-80 lg:h-80" />

        <InfoCard
          className="w-64 md:w-96 lg:self-start"
          IconComponent={<LocationSvg className="w-14 h-14 text-subject" />}
          info="Wiedner Hauptstraße, Austria, Vienna."
        />
        <InfoCard
          className="w-64 md:w-96 lg:self-center"
          IconComponent={<PhoneSvg className="w-14 h-14 text-subject" />}
          info="+43 677-6276-8620"
        />
        <InfoCard
          className="w-64 md:w-96 lg:self-end"
          IconComponent={<EmailSvg className="w-14 h-14 text-subject" />}
          info="contact.kakiee@gmail.com"
        />
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit(submit)}>
          <div className="sm:grid md:grid-cols-2 sm:gap-4 sm:items-start">
            <div className="sm:grid md:grid-cols-1 sm:gap-2 sm:items-start">
              <FormControl>
                <TextField
                  autocomplete="email"
                  className={inputClassName}
                  error={!!errors.email}
                  name="email"
                  placeholder="Email address"
                  ref={emailInputRef}
                  testId="email-input"
                  type="email"
                />
              </FormControl>

              <FormControl>
                <TextField
                  className={inputClassName}
                  name="name"
                  placeholder="Your name"
                  testId="name-input"
                  type="text"
                  {...register('name', {required: true})}
                />
              </FormControl>

              <FormControl>
                <TextField
                  className={inputClassName}
                  name="subject"
                  placeholder="Subject"
                  testId="subject-input"
                  type="text"
                  {...register('subject', {required: true})}
                />
              </FormControl>
            </div>

            <div className="h-full">
              <FormControl className="h-full">
                <Textarea
                  className={clsx(['h-full', inputClassName])}
                  name="message"
                  placeholder="Message"
                  {...register('message', {required: true})}
                />
              </FormControl>
            </div>

            <div className="col-span-2 mt-3">
              <BaseButton
                className="w-full justify-center uppercase bg-subject text-reverse"
                disabled={!isValid}
                Icon={EmailSvg}
                testId="submit-action-button"
                type="submit"
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
          height="500px"
          mapStyle={`mapbox://styles/mapbox/${
            darkTheme ? 'dark-v9' : 'light-v8'
          }`}
          width="100%"
        >
          <Marker
            draggable
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            offsetLeft={-10}
            offsetTop={-20}
            // onDragStart={this._onMarkerDragStart}
            // onDrag={this._onMarkerDrag}
            // onDragEnd={_onMarkerDragEnd}
          >
            <svg
              height={20}
              style={{
                fill: '#d00',
                stroke: 'none',
              }}
              viewBox="0 0 24 24"
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
