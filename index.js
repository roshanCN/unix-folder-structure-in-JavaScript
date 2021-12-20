	function simplify(path)
	{
		// using vector in place of stack
		let v = [];
		let n = path.length;
		let ans = "";
		for (let i = 0; i < n; i++) {
			let dir = "";
			
			// forming the current directory.
			while (i < n && path[i] != '/') {
				dir += path[i];
				i++;
			}

			// if ".." , we pop.
			if (dir == "..") {
				if (v.length > 0)
					v.pop();
			}
			else if (dir == "." || dir == "") {
				// do nothing (added for better understanding.)
			}
			else {
				// push the current directory into the vector.
				v.push(dir);
			}
		}

		// forming the ans
		for(let i of v) {
			ans += "/" + i;
		}

		// vector is empty
		if (ans == "")
			return "/";

		return ans;
	}
	
	// absolute path which we have to simplify.
	let Str = "./home/././folder1/folder2/../folder3";
	let res = simplify(Str);
	console.log(res);
  console.log(simplify("./home/././././folder1"))
  console.log(simplify('./home/folder1'))


