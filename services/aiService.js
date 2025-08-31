// services/aiService.js
// Müxtəlif AI xidmətlərini istifadə etmək üçün

const axios = require('axios');

class AIService {
  constructor() {
    this.service = process.env.AI_SERVICE || 'gemini';
  }

  // Cohere AI inteqrasiyası
  async getCohereResponse(userMessage) {
    try {
      const response = await axios.post(
        'https://api.cohere.ai/v1/generate',
        {
          model: 'command-nightly',
          prompt: `Azərbaycan dilində cavab ver. İstifadəçi: ${userMessage}\nCavab:`,
          max_tokens: 200,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data.generations[0].text.trim();
    } catch (error) {
      console.error('Cohere AI xətası:', error);
      throw error;
    }
  }

  // Hugging FFace inteqrasiyası
  async getHuggingFaceResponse(userMessage) {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
        {
          inputs: userMessage,
          parameters: {
            max_length: 200,
            temperature: 0.7,
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          }
        }
      );
      return response.data[0].generated_text;
    } catch (error) {
      console.error('Hugging Face xətası:', error);
      throw error;
    }
  }

  // OpenAI (əgər key varsa)
  async getOpenAIResponse(userMessage) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Sən Azərbaycan dilində danışan köməkçi chatbotsan.'
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 200,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI xətası:', error);
      throw error;
    }
  }

  // Ümumi metod  hansı xidməti istifadə edəcəyini seçir
  async getAIResponse(userMessage) {
    switch(this.service) {
      case 'cohere':
        return await this.getCohereResponse(userMessage);
      case 'huggingface':
        return await this.getHuggingFaceResponse(userMessage);
      case 'openai':
        return await this.getOpenAIResponse(userMessage);
      case 'gemini':
      default:
      
        throw new Error('Gemini üçün əsas controller istifadə edin');
    }
  }
}

module.exports = new AIService();