import {Fragment} from "react";
import NavItem from "./NavItem";
import LogoutButton from "../LogOut";

export default function SideBar() {

    return <Fragment>
        <nav className="bg-white sidebar fixed shadow-2xl gap-y-4 rounded-r-3xl flex py-8 pl-2  flex-col justify-between max-md:w-max md:w-[10rem] h-[calc(100vh-5rem)] ">
            <div className="flex gap-y-6 flex-col w-full">
                <NavItem uri="accueil" >

                    <span>

                        <svg className="w-5 fill-black stroke-black  h-5 mr-2" fill="none"
                             viewBox="0 -960 960 960" width="24px" ><path
                            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                      </span>
                    <span className="max-md:hidden">Dashboard</span>

                </NavItem>

                <NavItem uri="bd"
                         className="flex w-full  hover:bg-[var(--primary-color-op-50)] p-2 rounded-l-2xl align-baseline items-center">
                    <span>

                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                            d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </span>
                    <span className="max-md:hidden">BD</span>
                </NavItem>
                <NavItem uri="messages"
                         className="flex w-full  hover:bg-[var(--primary-color-op-50)] p-2 rounded-l-2xl align-baseline items-center">
                    <span>

                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                            d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/></svg>

                      </span>

                    <span className="max-md:hidden">Messages</span>

                </NavItem>
                <NavItem uri={"favorites"}
                         className="flex w-full  hover:bg-[var(--primary-color-op-50)] p-2 rounded-l-2xl align-baseline items-center">
                    <span className="material-icons  mr-2">favorite</span>
                           <span className="max-md:hidden">Favories</span>

                </NavItem>
                <NavItem uri={"tasks"} className="flex w-full align-baseline items-center">
                    <span>

                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                            d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"/></svg>
                    </span>
                    <span className="max-md:hidden">Tasks</span>

                </NavItem>
                <NavItem uri={"settings"} className="flex w-full align-baseline items-center">
                    <span>

                        <svg className="w-6 h-4 -ml-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                            d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </span>
                    <span className="max-md:hidden">Setting</span>

                </NavItem>
            </div>
            <div className="flex gap-y-4 flex-col w-full">
                <div
                    className="flex rounded-l-2xl bg-gray-200 p-2 hover:bg-gray-400 hover:text-white  w-full align-baseline items-center">
                    <span>

                        <svg className="w-4  h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>            </span>
                    <span className="max-md:hidden">Help</span>

                </div>
                <div
                    className="flex bg-gray-200 p-2 rounded-l-2xl hover:bg-gray-400 hover:text-white  w-full align-baseline items-center">
                    <span>
                        <svg className="w-4  h-4 mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="20" height="20" fill="url(#pattern0_1041_2679)"/>
                            <defs>
                                <pattern id="pattern0_1041_2679" patternContentUnits="objectBoundingBox" width="1"
                                         height="1">
                                    <use xlinkHref="#image0_1041_2679" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_1041_2679" width="90" height="90"
                                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEr0lEQVR4nO2c34tWRRjHP+5re3Ztu9AoIouky9JAtFwrgwhJu+onYauhW16Uv/r5HxSmlYtooFdK4FUkbcGuZt6GYqV1Gym6ukHlj0pdDfONwSdYlp055/Cec+bMvM8HHniv3pnzPXNmnnnmmQcURVEURVEURVGUzDSAecArwCbgC+An4BfgHHAV+Fd+/wocBQaBAWAV8AAwNXtz7cVMYL0IdgFotmh/Ap8Dq4HbaXO6gD5gP3CtAHFt9g/wFfCcfC1tQw/wNjBaorg2M9PPWqCbiJkKvAn84UHgiXYSeBnoIDIeBX6sgcAT7TAwmwjoBLYC13MK8DcwDLwvI28BcC8wXf6zQ37fCTwMLAM+AA4AF3O2ZbyYdwkYI8yRHA98BvhQhGvFPUuAJ4DtOacp80KD43HgfMYH/Bp4siSPwIz+F4HvMvTjIIHxLHAlw4MNAw9W2K8lKetEUEKvyuATnwKe8dQ/M7e/Jhuaif1aQUAjOU3kT8WP9s3dwG6Zw41v/ToBzcljDoEvy2hXWvQuXAvfOeARVbj1Vf1Iiss2W0Vuna0pI1lFLmhbfd0xJ+t0UQBm53bMMZpXFtGIciMK53LhlALoccQQTtbET46Cdxyj2deOL8rjp1FH7CJkuoGdEmb9HdgskUAv9DlG80OEzc5JnmnIl9j7HaHOkJkihw3NOog90xE0MvHk0PnL8bVWKvYGxzY7hmP8gZTIY2ViD1o6YI6fYiARMb2K3XBE6MwZXywkvsWeb2nULCA3EReJT7H7I/Wdayf2Zktj7xF3rP3LFLH3ySau9IUwmAPNUMS2HdObDKLYSaqcRk5YGphFuUwDPikoZ7psGypiZNvCordSLjtqIGAeM/GSlrhq+WMzh5WZ7HK5BuLlsUutpgKr0FQjtE4dZBLaTHVBLobdwLYcmak+bbiIxdDm3vUSP0kG964QkZG7ftEkb9d5w7LJ0oi5+hArnT624P2Ohtp5N9hVdMPzLI21c5i0q+rAf0w5dolPkdMWxI+Ig6QOIhvWWRofjeRwdlsdREYuT9rSDZYSNh2yffYu8v/ss3TkG8IXeswhcuXZSi853nrou8RddREZ+XzORJoW1iNij4nbOuAzydHwlmNUP0/4TKEm3CxprZMJPQLc4ruDMWHLwzO2x3fnYqIh1blsYpsKX0pBLEy5/raoqIYU2OIY1SY2MkdFKi5me9ghttmezymorbZnllxHdo3sRW2vUkE8llJGYkyqKioF8HSGwih7auJnjy+Mclwik0GxMoPYI8ALHt3S4Ev9jB/ZrmmkKXZAXMSqWCpVe6MoXjV+znYtkM0JD/hUSYcHiUQcv8/YjyC5BziUUeym1ILeIh5KZ4viLpZ037M52l9OwJgT8o+lsHYzh12UW7obpehVr9RumiEvoSElM++SAi19cv3jYMpJyWR2RQoJREEv8ENOAaqwb4H7iIyGuFG/1UDgEzJ31yb2XNZ1iTeA0x4E/lncO68nJ1WTSDnioQpKzw+K2xldYe683AGsAfbm9BRc8ZXPgFeB23w/XF3pAOaKt7FRxD8qNUTPyjWPa+KnnxYfea94NyaN+P5IEnoURVEURVEURVGohP8AWtcuugZjj5AAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>

                    </span>
                    <span className="max-md:hidden">
                        <LogoutButton/>
                    </span>

                </div>

            </div>
        </nav>
    </Fragment>
}