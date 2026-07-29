class Retry {

    static async execute(operation, retries = 3, delay = 1000) {

        for (let attempt = 1; attempt <= retries; attempt++) {

            try {
                return await operation();
            } catch (error) {

                if (attempt === retries) {
                    throw error;
                }

                console.log(
                    `[RETRY] Attempt ${attempt} failed. Retrying in ${delay} ms...`
                );

                await new Promise(resolve => setTimeout(resolve, delay));

                delay *= 2; // Exponential backoff
            }
        }
    }

}

module.exports = Retry;