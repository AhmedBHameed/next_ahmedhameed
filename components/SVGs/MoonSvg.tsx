import {memo} from 'react';

const Moon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    height="1em"
    viewBox="0 0 512 512"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="m245 11c-135.31 0-245 109.69-245 245 0 44.567 11.904 86.352 32.7 122.357l2.257 1h37.222c10.378 0 18.821-8.443 18.821-18.822 0-10.378-8.443-18.821-18.821-18.821h-21.014c-9.275 0-16.821-7.546-16.821-16.822s7.546-16.822 16.821-16.822h122.452c9.275 0 16.822 7.546 16.822 16.822s-7.546 16.822-16.822 16.822h-10.348c-10.378 0-18.821 8.443-18.821 18.821s8.443 18.822 18.821 18.822h79.91c9.275 0 16.821 7.546 16.821 16.821s-7.546 16.822-16.821 16.822h-184.897l-.511 1c44.942 53.202 112.134 87 187.23 87 135.31 0 245-109.69 245-245s-109.691-245-245.001-245z"
        fill="#c35ac7"
      />
      <path
        d="m157.095 193.07c-.081 1.977-.137 3.955-.138 5.935 0 37.917 14.618 73.697 41.193 100.994h81.029c9.843 0 17.822-7.979 17.822-17.822s-7.979-17.822-17.822-17.822h-79.91c-9.843 0-17.822-7.979-17.822-17.822s7.979-17.822 17.822-17.822h10.348c9.843 0 17.822-7.979 17.822-17.822s-7.979-17.822-17.822-17.822h-52.522z"
        fill="#e387dd"
      />
      <g>
        <path
          d="m365.382 305.191c-4.916-17.766-5.758-36.064-2.435-52.916.31-1.572 2.041-2.407 3.464-1.673 5.369 2.77 12.009 4.235 19.199 4.234 7.706 0 16.119-1.663 24.329-4.81l5.838-2.26-5.698-.158c-1.042-.029-1.947-.726-2.241-1.725l-2.924-9.929c-4.467-.978-8.17-4.076-9.901-8.483-1.298-3.304-1.144-7.004.169-10.302.3-.753 1.028-1.246 1.838-1.246h.378c3.545 0 6.907 1.336 9.467 3.762l9.445-6.47c-1.356-3.31-1.373-6.964-.049-10.289l.106-.265c.296-.744 1.012-1.236 1.813-1.246l.407-.005c4.548 0 8.797 2.236 11.364 5.982 1.983 2.896 2.777 6.405 2.235 9.881l8.202 6.313c.826.636 1.149 1.731.799 2.713l-1.911 5.371 4.218-4.627c11.705-12.932 17.635-27.652 16.265-40.379-.172-1.593 1.233-2.906 2.811-2.627 16.914 2.991 33.672 10.388 48.46 21.39 1.529 1.138 1.191 3.518-.595 4.184h-.001c-3.104 1.159-6.06 2.692-8.783 4.558-11.307 7.746-18.155 20.939-18.787 36.197-.062 1.515-1.494 2.595-2.968 2.239-1.447-.349-2.93-.527-4.407-.527-5.41 0-10.635 2.369-14.336 6.498-3.725 4.156-5.44 9.511-4.829 15.08l.569 5.178c.21 1.911-1.795 3.284-3.501 2.398l-4.623-2.401c-2.82-1.464-5.828-2.207-8.939-2.207-5.224 0-10.326 2.157-13.998 5.917-2.863 2.93-4.663 6.619-5.206 10.667-.202 1.502-1.726 2.446-3.16 1.957-5.484-1.867-11.042-2.813-16.524-2.813-8.787 0-17.092 2.508-24.019 7.252-2.72 1.863-5.218 4.065-7.424 6.544-1.268 1.425-3.609.881-4.117-.957z"
          fill="#5d3f9a"
        />
        <g>
          <path
            d="m378.311 254.297c-4.37-.653-8.407-1.892-11.9-3.694-1.424-.735-3.154.101-3.464 1.673-3.323 16.853-2.481 35.151 2.435 52.916.508 1.837 2.849 2.382 4.117.958 2.206-2.479 4.703-4.68 7.424-6.544 1.001-.685 2.033-1.318 3.089-1.91-3.318-14.613-3.903-29.438-1.701-43.399z"
            fill="#4b3087"
          />
        </g>
      </g>
      <path
        d="m301.994 343.043c-79.228.001-144.038-64.809-144.037-144.037 0-47.7 23.19-89.982 58.908-116.194 3.07-2.253 1.002-7.103-2.746-6.428-84.605 15.229-148.799 89.214-148.8 178.204-.001 99.853 81.24 181.094 181.093 181.093 88.99-.001 162.975-64.195 178.204-148.8.675-3.748-4.175-5.816-6.428-2.746-26.212 35.718-68.493 58.908-116.194 58.908z"
        fill="#fed402"
      />
      <g fill="#fac600">
        <path d="m114.669 307.07c-4.981-16.526-7.669-34.035-7.669-52.163.001-68.632 38.189-128.331 94.469-159.043 4.818-4.696 9.96-9.063 15.396-13.052 3.07-2.253 1.002-7.103-2.746-6.428-84.605 15.229-148.799 89.214-148.8 178.204 0 18.245 2.723 35.863 7.765 52.483h41.585z" />
        <path d="m201.679 414h-41.12c25.565 13.824 54.808 21.681 85.853 21.68 6.578 0 13.072-.36 19.468-1.044-23.003-2.826-44.681-9.992-64.201-20.636z" />
      </g>
      <path
        d="m223.05 154.05c-7.206 2.635-10.364 5.794-13 13-.636 1.739-3.111 1.739-3.746 0-2.635-7.206-5.794-10.364-13-13-1.739-.636-1.739-3.111 0-3.746 7.206-2.635 10.364-5.794 13-13 .636-1.739 3.111-1.739 3.746 0 2.635 7.206 5.794 10.364 13 13 1.738.635 1.738 3.11 0 3.746z"
        fill="#fff"
      />
      <path
        d="m50.696 230.05c-7.206 2.635-10.364 5.794-13 13-.636 1.739-3.111 1.739-3.746 0-2.635-7.206-5.794-10.364-13-13-1.739-.636-1.739-3.111 0-3.746 7.206-2.635 10.364-5.794 13-13 .636-1.739 3.111-1.739 3.746 0 2.635 7.206 5.794 10.364 13 13 1.739.635 1.739 3.11 0 3.746z"
        fill="#fff"
      />
      <path
        d="m313.293 220.275c-9.433 3.45-13.568 7.585-17.018 17.018-.832 2.276-4.072 2.276-4.904 0-3.45-9.433-7.585-13.568-17.018-17.018-2.276-.832-2.276-4.072 0-4.904 9.433-3.45 13.568-7.585 17.018-17.018.832-2.276 4.072-2.276 4.904 0 3.45 9.433 7.585 13.568 17.018 17.018 2.276.832 2.276 4.072 0 4.904z"
        fill="#fed402"
      />
      <path
        d="m106.487 90.787c-13.887 5.079-19.975 11.166-25.054 25.054-1.225 3.351-5.995 3.351-7.22 0-5.079-13.887-11.166-19.975-25.054-25.054-3.351-1.225-3.351-5.995 0-7.22 13.888-5.079 19.975-11.167 25.054-25.054 1.225-3.351 5.995-3.351 7.22 0 5.079 13.887 11.167 19.975 25.054 25.054 3.351 1.225 3.351 5.995 0 7.22z"
        fill="#fed402"
      />
      <path
        d="m272.121 50.636-8.757-8.757c-1.172-1.172-1.172-3.071 0-4.243l8.757-8.757c1.172-1.172 3.071-1.172 4.243 0l8.757 8.757c1.172 1.172 1.172 3.071 0 4.243l-8.757 8.757c-1.172 1.172-3.071 1.172-4.243 0z"
        fill="#fff"
      />
      <path
        d="m393.121 416.636-8.757-8.757c-1.172-1.172-1.172-3.071 0-4.243l8.757-8.757c1.172-1.172 3.071-1.172 4.243 0l8.757 8.757c1.172 1.172 1.172 3.071 0 4.243l-8.757 8.757c-1.172 1.172-3.071 1.172-4.243 0z"
        fill="#fff"
      />
      <path
        d="m243.178 378.357h-79.91c-9.843 0-17.822-7.979-17.822-17.822s7.979-17.822 17.822-17.822h10.348c9.843 0 17.822-7.979 17.822-17.822s-7.979-17.822-17.822-17.822h-122.451c-9.843 0-17.822 7.979-17.822 17.822s7.979 17.822 17.822 17.822h21.013c9.843 0 17.822 7.979 17.822 17.822s-7.979 17.822-17.822 17.822h-39.478c7.301 12.64 15.707 24.559 25.07 35.643h185.408c9.843 0 17.822-7.979 17.822-17.822s-7.979-17.821-17.822-17.821z"
        fill="#e387dd"
      />
      <g>
        <path
          d="m221.389 116.549c10.334-18.24 24.372-33.633 40.597-44.514 1.513-1.015 3.577-.295 4.131 1.441 2.09 6.546 6.252 13.063 12.035 18.845 6.197 6.197 14.3 11.625 23.434 15.697l6.513 2.877-4.455-4.71c-.815-.861-.982-2.149-.415-3.19l5.633-10.336c-2.806-4.379-3.292-9.848-1.141-14.785 1.613-3.701 4.713-6.553 8.421-8.149.846-.364 1.829-.176 2.48.476l.304.304c2.851 2.851 4.48 6.629 4.588 10.639l12.799 2.393c1.572-3.753 4.497-6.705 8.235-8.314l.298-.128c.837-.36 1.808-.18 2.46.456l.331.323c3.658 3.658 5.276 8.873 4.328 13.949-.734 3.924-2.918 7.384-6.149 9.744l1.519 11.673c.153 1.176-.468 2.316-1.539 2.825l-5.857 2.783 7.113-.329c19.813-.986 36.42-8.055 45.553-19.392 1.143-1.419 3.329-1.345 4.373.148 11.197 16.008 18.725 35.433 21.77 56.174.315 2.145-1.871 3.787-3.843 2.887h-.001c-3.429-1.564-7.039-2.708-10.729-3.398-15.322-2.864-31.44 2.239-44.218 14.001-1.269 1.168-3.289.886-4.188-.586-.883-1.445-1.933-2.78-3.12-3.967-4.351-4.351-10.458-6.648-16.755-6.303-6.338.346-12.024 3.274-16.011 8.244l-3.707 4.621c-1.368 1.705-4.084 1.198-4.744-.887l-1.787-5.649c-1.09-3.445-2.912-6.462-5.414-8.964-4.201-4.201-10.038-6.57-16.015-6.499-4.659.054-9.072 1.573-12.765 4.391-1.37 1.046-3.355.579-4.116-.968-2.909-5.911-6.618-11.143-11.026-15.551-7.066-7.066-15.762-11.729-25.148-13.484-3.686-.689-7.466-.927-11.233-.708-2.163.127-3.608-2.194-2.539-4.08z"
          fill="#5d3f9a"
        />
        <g>
          <path
            d="m272.716 86.016c-2.989-4.04-5.239-8.282-6.599-12.541-.554-1.736-2.618-2.455-4.131-1.441-16.225 10.881-30.263 26.273-40.597 44.514-1.069 1.886.376 4.207 2.54 4.081 3.767-.22 7.547.019 11.233.708 1.356.254 2.695.575 4.02.948 9.083-14.418 20.536-26.811 33.534-36.269z"
            fill="#4b3087"
          />
        </g>
      </g>
    </g>
  </svg>
);

const MoonSvg = memo(Moon);
export {MoonSvg};
