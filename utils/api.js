const API_URL='https://desafiobackendg34.onrender.com'

export async function getAllPosts() {
    const response = await fetch(`${API_URL}/posts`);
    const responseJson = await response.json();
    return responseJson.data;
}

export async function getPostbyID(id) {
    const response = await fetch(`${API_URL}/posts/${id}`);
    const responseJson = await response.json();
    return responseJson;
}

export async function loginUser(email, password) {
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Verificamos si la respuesta es correcta
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
  
      const data = await response.json();
      const token = data.data.token.token;
      const id = data.data.token.id;
      
      // Si el login es exitoso, guardamos el token y el ID en el localStorage
      if (data.success && token && id) {
        // localStorage.setItem("token", token); // removed as it set on login jsx page on submit function
        localStorage.setItem("userId", id); // Guardar el ID en el localStorage
        return { success: true, token: token, id: id };
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error during login:", error);
      return { success: false, message: error.message };
    }
  }