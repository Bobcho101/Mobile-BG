import React, { ChangeEvent, useReducer } from "react";
import Link from "next/link";


interface FormState {
    email: string,
    password: string,
};

interface Action {
    field: string,
    value: string,
    type: string,
}


const initialState: FormState = {
    email: "",
    password: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
    if(action.type === 'CHANGE_FIELD_VALUE'){
        return {
            ...state,
            [action.field]: action.value,
        }
    } else{
        return state;
    }
}



const Login: React.FC = () => {
    const [ state, dispatch ] = useReducer(formReducer, initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_FIELD_VALUE',
            field: e.target.name,
            value: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
                Log In
                </h2>

                <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                    </label>
                    <input
                    type="email"
                    onChange={handleChange}
                    value={state.email}
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter email"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                    </label>
                    <input
                    type="password"
                    onChange={handleChange}
                    value={state.password}
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter password"
                    required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                        Remember me
                    </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Log In
                </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-6">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-600 hover:underline">
                    Create one
                </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;