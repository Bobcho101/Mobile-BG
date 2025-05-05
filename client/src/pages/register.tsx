import Link from "next/link";
import { ChangeEvent, FormEvent, useReducer } from "react";

interface FormState {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
};

interface Action {
    field: string,
    value: string,
    type: string,
}


const initialState: FormState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

const Register: React.FC = () => {
    const [ state, dispatch ] = useReducer(formReducer, initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: 'CHANGE_FIELD_VALUE',
          field: e.target.name,
          value: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         
        if(state.password !== state.confirmPassword){
            alert('Passwords do not match!')
            return;
        }
    }

    return (
        <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
                Create an Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                    </label>
                    <input
                    type="text"
                    onChange={handleChange}
                    value={state.username}
                    id="username"
                    name="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter username"
                    required
                    />
                </div>

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
                    placeholder="Enter email address"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    value={state.password}
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter password"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                    </label>
                    <input
                    type="password"
                    id="confirmPassword"
                    onChange={handleChange}
                    value={state.confirmPassword}
                    name="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Confirm password"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Register
                </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                    Log in
                </Link>
                </p>
            </div>
            </div>
        </>
    );
};

export default Register;