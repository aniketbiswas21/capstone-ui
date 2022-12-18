import axios from "axios";

const fileToBase64 = async (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result)
        };
    });
};

export const callApi = async (file1, file2, task, body, callbackFn) => {
    try {
        const [base64File1, base64File2] = await Promise.all([fileToBase64(file1), fileToBase64(file2)]);

        const response = await axios.post(`https://f82911f031a38997.gradio.app/run/predict`, JSON.stringify({data: [base64File1, base64File2, task, body]}), { headers: { "Content-Type": "application/json" }, timeout: 0 })
        const { data } = response.data;

        return callbackFn(data[0]);
    } catch (error) {
        console.error(error)   
    }
};
