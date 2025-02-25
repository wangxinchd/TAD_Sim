// Fill out your copyright notice in the Description page of Project Settings.

#include "CudaCheck.h"

#ifdef FIND_CUDA

#include <cuda.h>

const char* _cudaGetErrorEnum(cudaError_t error)
{
    return cudaGetErrorName(error);
}
const char* _cudaGetErrorEnum(CUresult error)
{
    static char unknown[] = "<unknown>";
    const char* ret = NULL;
    cuGetErrorName(error, &ret);
    return ret ? ret : unknown;
}

// nvJPEG API errors
const char* _cudaGetErrorEnum(nvjpegStatus_t error)
{
    switch (error)
    {
        case NVJPEG_STATUS_SUCCESS:
            return "NVJPEG_STATUS_SUCCESS";

        case NVJPEG_STATUS_NOT_INITIALIZED:
            return "NVJPEG_STATUS_NOT_INITIALIZED";

        case NVJPEG_STATUS_INVALID_PARAMETER:
            return "NVJPEG_STATUS_INVALID_PARAMETER";

        case NVJPEG_STATUS_BAD_JPEG:
            return "NVJPEG_STATUS_BAD_JPEG";

        case NVJPEG_STATUS_JPEG_NOT_SUPPORTED:
            return "NVJPEG_STATUS_JPEG_NOT_SUPPORTED";

        case NVJPEG_STATUS_ALLOCATOR_FAILURE:
            return "NVJPEG_STATUS_ALLOCATOR_FAILURE";

        case NVJPEG_STATUS_EXECUTION_FAILED:
            return "NVJPEG_STATUS_EXECUTION_FAILED";

        case NVJPEG_STATUS_ARCH_MISMATCH:
            return "NVJPEG_STATUS_ARCH_MISMATCH";

        case NVJPEG_STATUS_INTERNAL_ERROR:
            return "NVJPEG_STATUS_INTERNAL_ERROR";
    }

    return "<unknown>";
}
const char* _cudaGetErrorEnum(NppStatus error)
{
    switch (error)
    {
        case NPP_NOT_SUPPORTED_MODE_ERROR:
            return "NPP_NOT_SUPPORTED_MODE_ERROR";

        case NPP_ROUND_MODE_NOT_SUPPORTED_ERROR:
            return "NPP_ROUND_MODE_NOT_SUPPORTED_ERROR";

        case NPP_RESIZE_NO_OPERATION_ERROR:
            return "NPP_RESIZE_NO_OPERATION_ERROR";

        case NPP_NOT_SUFFICIENT_COMPUTE_CAPABILITY:
            return "NPP_NOT_SUFFICIENT_COMPUTE_CAPABILITY";

#if ((NPP_VERSION_MAJOR << 12) + (NPP_VERSION_MINOR << 4)) <= 0x5000

        case NPP_BAD_ARG_ERROR:
            return "NPP_BAD_ARGUMENT_ERROR";

        case NPP_COEFF_ERROR:
            return "NPP_COEFFICIENT_ERROR";

        case NPP_RECT_ERROR:
            return "NPP_RECTANGLE_ERROR";

        case NPP_QUAD_ERROR:
            return "NPP_QUADRANGLE_ERROR";

        case NPP_MEM_ALLOC_ERR:
            return "NPP_MEMORY_ALLOCATION_ERROR";

        case NPP_HISTO_NUMBER_OF_LEVELS_ERROR:
            return "NPP_HISTOGRAM_NUMBER_OF_LEVELS_ERROR";

        case NPP_INVALID_INPUT:
            return "NPP_INVALID_INPUT";

        case NPP_POINTER_ERROR:
            return "NPP_POINTER_ERROR";

        case NPP_WARNING:
            return "NPP_WARNING";

        case NPP_ODD_ROI_WARNING:
            return "NPP_ODD_ROI_WARNING";
#else

            // These are for CUDA 5.5 or higher
        case NPP_BAD_ARGUMENT_ERROR:
            return "NPP_BAD_ARGUMENT_ERROR";

        case NPP_COEFFICIENT_ERROR:
            return "NPP_COEFFICIENT_ERROR";

        case NPP_RECTANGLE_ERROR:
            return "NPP_RECTANGLE_ERROR";

        case NPP_QUADRANGLE_ERROR:
            return "NPP_QUADRANGLE_ERROR";

        case NPP_MEMORY_ALLOCATION_ERR:
            return "NPP_MEMORY_ALLOCATION_ERROR";

        case NPP_HISTOGRAM_NUMBER_OF_LEVELS_ERROR:
            return "NPP_HISTOGRAM_NUMBER_OF_LEVELS_ERROR";

        case NPP_INVALID_HOST_POINTER_ERROR:
            return "NPP_INVALID_HOST_POINTER_ERROR";

        case NPP_INVALID_DEVICE_POINTER_ERROR:
            return "NPP_INVALID_DEVICE_POINTER_ERROR";
#endif

        case NPP_LUT_NUMBER_OF_LEVELS_ERROR:
            return "NPP_LUT_NUMBER_OF_LEVELS_ERROR";

        case NPP_TEXTURE_BIND_ERROR:
            return "NPP_TEXTURE_BIND_ERROR";

        case NPP_WRONG_INTERSECTION_ROI_ERROR:
            return "NPP_WRONG_INTERSECTION_ROI_ERROR";

        case NPP_NOT_EVEN_STEP_ERROR:
            return "NPP_NOT_EVEN_STEP_ERROR";

        case NPP_INTERPOLATION_ERROR:
            return "NPP_INTERPOLATION_ERROR";

        case NPP_RESIZE_FACTOR_ERROR:
            return "NPP_RESIZE_FACTOR_ERROR";

        case NPP_HAAR_CLASSIFIER_PIXEL_MATCH_ERROR:
            return "NPP_HAAR_CLASSIFIER_PIXEL_MATCH_ERROR";

#if ((NPP_VERSION_MAJOR << 12) + (NPP_VERSION_MINOR << 4)) <= 0x5000

        case NPP_MEMFREE_ERR:
            return "NPP_MEMFREE_ERR";

        case NPP_MEMSET_ERR:
            return "NPP_MEMSET_ERR";

        case NPP_MEMCPY_ERR:
            return "NPP_MEMCPY_ERROR";

        case NPP_MIRROR_FLIP_ERR:
            return "NPP_MIRROR_FLIP_ERR";
#else

        case NPP_MEMFREE_ERROR:
            return "NPP_MEMFREE_ERROR";

        case NPP_MEMSET_ERROR:
            return "NPP_MEMSET_ERROR";

        case NPP_MEMCPY_ERROR:
            return "NPP_MEMCPY_ERROR";

        case NPP_MIRROR_FLIP_ERROR:
            return "NPP_MIRROR_FLIP_ERROR";
#endif

        case NPP_ALIGNMENT_ERROR:
            return "NPP_ALIGNMENT_ERROR";

        case NPP_STEP_ERROR:
            return "NPP_STEP_ERROR";

        case NPP_SIZE_ERROR:
            return "NPP_SIZE_ERROR";

        case NPP_NULL_POINTER_ERROR:
            return "NPP_NULL_POINTER_ERROR";

        case NPP_CUDA_KERNEL_EXECUTION_ERROR:
            return "NPP_CUDA_KERNEL_EXECUTION_ERROR";

        case NPP_NOT_IMPLEMENTED_ERROR:
            return "NPP_NOT_IMPLEMENTED_ERROR";

        case NPP_ERROR:
            return "NPP_ERROR";

        case NPP_SUCCESS:
            return "NPP_SUCCESS";

        case NPP_WRONG_INTERSECTION_QUAD_WARNING:
            return "NPP_WRONG_INTERSECTION_QUAD_WARNING";

        case NPP_MISALIGNED_DST_ROI_WARNING:
            return "NPP_MISALIGNED_DST_ROI_WARNING";

        case NPP_AFFINE_QUAD_INCORRECT_WARNING:
            return "NPP_AFFINE_QUAD_INCORRECT_WARNING";

        case NPP_DOUBLE_SIZE_WARNING:
            return "NPP_DOUBLE_SIZE_WARNING";

        case NPP_WRONG_INTERSECTION_ROI_WARNING:
            return "NPP_WRONG_INTERSECTION_ROI_WARNING";

#if ((NPP_VERSION_MAJOR << 12) + (NPP_VERSION_MINOR << 4)) >= 0x6000
            /* These are 6.0 or higher */
        case NPP_LUT_PALETTE_BITSIZE_ERROR:
            return "NPP_LUT_PALETTE_BITSIZE_ERROR";

        case NPP_ZC_MODE_NOT_SUPPORTED_ERROR:
            return "NPP_ZC_MODE_NOT_SUPPORTED_ERROR";

        case NPP_QUALITY_INDEX_ERROR:
            return "NPP_QUALITY_INDEX_ERROR";

        case NPP_CHANNEL_ORDER_ERROR:
            return "NPP_CHANNEL_ORDER_ERROR";

        case NPP_ZERO_MASK_VALUE_ERROR:
            return "NPP_ZERO_MASK_VALUE_ERROR";

        case NPP_NUMBER_OF_CHANNELS_ERROR:
            return "NPP_NUMBER_OF_CHANNELS_ERROR";

        case NPP_COI_ERROR:
            return "NPP_COI_ERROR";

        case NPP_DIVISOR_ERROR:
            return "NPP_DIVISOR_ERROR";

        case NPP_CHANNEL_ERROR:
            return "NPP_CHANNEL_ERROR";

        case NPP_STRIDE_ERROR:
            return "NPP_STRIDE_ERROR";

        case NPP_ANCHOR_ERROR:
            return "NPP_ANCHOR_ERROR";

        case NPP_MASK_SIZE_ERROR:
            return "NPP_MASK_SIZE_ERROR";

        case NPP_MOMENT_00_ZERO_ERROR:
            return "NPP_MOMENT_00_ZERO_ERROR";

        case NPP_THRESHOLD_NEGATIVE_LEVEL_ERROR:
            return "NPP_THRESHOLD_NEGATIVE_LEVEL_ERROR";

        case NPP_THRESHOLD_ERROR:
            return "NPP_THRESHOLD_ERROR";

        case NPP_CONTEXT_MATCH_ERROR:
            return "NPP_CONTEXT_MATCH_ERROR";

        case NPP_FFT_FLAG_ERROR:
            return "NPP_FFT_FLAG_ERROR";

        case NPP_FFT_ORDER_ERROR:
            return "NPP_FFT_ORDER_ERROR";

        case NPP_SCALE_RANGE_ERROR:
            return "NPP_SCALE_RANGE_ERROR";

        case NPP_DATA_TYPE_ERROR:
            return "NPP_DATA_TYPE_ERROR";

        case NPP_OUT_OFF_RANGE_ERROR:
            return "NPP_OUT_OFF_RANGE_ERROR";

        case NPP_DIVIDE_BY_ZERO_ERROR:
            return "NPP_DIVIDE_BY_ZERO_ERROR";

        case NPP_RANGE_ERROR:
            return "NPP_RANGE_ERROR";

        case NPP_NO_MEMORY_ERROR:
            return "NPP_NO_MEMORY_ERROR";

        case NPP_ERROR_RESERVED:
            return "NPP_ERROR_RESERVED";

        case NPP_NO_OPERATION_WARNING:
            return "NPP_NO_OPERATION_WARNING";

        case NPP_DIVIDE_BY_ZERO_WARNING:
            return "NPP_DIVIDE_BY_ZERO_WARNING";
#endif

#if ((NPP_VERSION_MAJOR << 12) + (NPP_VERSION_MINOR << 4)) >= 0x7000
            /* These are 7.0 or higher */
        case NPP_OVERFLOW_ERROR:
            return "NPP_OVERFLOW_ERROR";

        case NPP_CORRUPTED_DATA_ERROR:
            return "NPP_CORRUPTED_DATA_ERROR";
#endif
    }

    return "<unknown>";
}

#endif
