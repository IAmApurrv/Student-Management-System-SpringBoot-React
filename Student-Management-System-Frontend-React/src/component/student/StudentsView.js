import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const StudentsView = () => {
	const [students, setStudents] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadStudents();
	}, []);

	const loadStudents = async () => {
		const result = await axios.get(
			"http://localhost:8080/students",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setStudents(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/students/delete/${id}`
		);
		loadStudents();
	};

	return (
		// <div className="justify-content-center">
		<div className="">
			<div className="">
				<Search className=""
					search={search}
					setSearch={setSearch}
				></Search>
			</div>

			<table className="table table-bordered table-hover shadow">
				<thead className="">
					<tr className="text-center">
						<th className="bg-primary text-white">ID</th>
						<th className="bg-primary text-white">Name</th>
						<th className="bg-primary text-white">Gender</th>
						<th className="bg-primary text-white">Email</th>
						<th className="bg-primary text-white">Depatment</th>
						<th colSpan="3" className="bg-primary text-white">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{students
						.filter((st) =>
							st.name
								.toLowerCase()
								.includes(search)
						)
						.map((student, index) => (
							<tr key={student.id}>
								<td scope="row" key={index} className="bg-secondary text-white">
									{index + 1}
									{/* {student.id} */}
								</td>
								<td className="bg-secondary text-white">{student.name}</td>
								<td className="bg-secondary text-white">{student.gender}</td>
								<td className="bg-secondary text-white">{student.email}</td>
								<td className="bg-secondary text-white">{student.department}</td>
								<td className="mx-2 bg-secondary text-white">
									<Link
										to={`/student-profile/${student.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2 bg-secondary text-white">
									<Link
										to={`/edit-student/${student.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2 bg-secondary text-white">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(student.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
		// </div>
	);
};

export default StudentsView;
