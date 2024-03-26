import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditStudent = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [student, setStudent] = useState({
		name: "",
		gender: "",
		email: "",
		department: "",
	});
	const {
		name,
		gender,
		email,
		department,
	} = student;

	useEffect(() => {
		loadStudent();
	}, []);

	const loadStudent = async () => {
		const result = await axios.get(
			`http://localhost:8080/students/student/${id}`
		);
		setStudent(result.data);
	};

	const handleInputChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};
	const updateStudent = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8080/students/update/${id}`,
			student
		);
		navigate("/view-students");
	};

	return (
		<div className="py-2 px-5 col-sm-8 offset-2 shadow bg-dark text-white text-center">
			<h2 className="mt-5" style={{marginBottom:"30px"}}> Edit Student</h2>
			<form onSubmit={(e) => updateStudent(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="name">
						Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="gender">
						Gender
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="gender"
						id="gender"
						required
						value={gender}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="department"
						id="department"
						required
						value={department}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5 justify-content-center">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-students"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditStudent;
