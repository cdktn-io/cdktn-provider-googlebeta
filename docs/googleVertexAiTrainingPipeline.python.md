# `googleVertexAiTrainingPipeline` Submodule <a name="`googleVertexAiTrainingPipeline` Submodule" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiTrainingPipeline <a name="GoogleVertexAiTrainingPipeline" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline google_vertex_ai_training_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  model_id: str,
  training_task_definition: str,
  training_task_inputs: str,
  deletion_policy: str = None,
  encryption_spec: GoogleVertexAiTrainingPipelineEncryptionSpec = None,
  id: str = None,
  input_data_config: GoogleVertexAiTrainingPipelineInputDataConfig = None,
  labels: typing.Mapping[str] = None,
  model_to_upload: GoogleVertexAiTrainingPipelineModelToUpload = None,
  parent_model: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiTrainingPipelineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition">training_task_definition</a></code> | <code>str</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs">training_task_inputs</a></code> | <code>str</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelToUpload">model_to_upload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.parentModel">parent_model</a></code> | <code>str</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.displayName"></a>

- *Type:* str

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelId"></a>

- *Type:* str

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_id GoogleVertexAiTrainingPipeline#model_id}

---

##### `training_task_definition`<sup>Required</sup> <a name="training_task_definition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition"></a>

- *Type:* str

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_definition GoogleVertexAiTrainingPipeline#training_task_definition}

---

##### `training_task_inputs`<sup>Required</sup> <a name="training_task_inputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs"></a>

- *Type:* str

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_inputs GoogleVertexAiTrainingPipeline#training_task_inputs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deletion_policy GoogleVertexAiTrainingPipeline#deletion_policy}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#input_data_config GoogleVertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `model_to_upload`<sup>Optional</sup> <a name="model_to_upload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.modelToUpload"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_to_upload GoogleVertexAiTrainingPipeline#model_to_upload}

---

##### `parent_model`<sup>Optional</sup> <a name="parent_model" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.parentModel"></a>

- *Type:* str

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parent_model GoogleVertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.region"></a>

- *Type:* str

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#region GoogleVertexAiTrainingPipeline#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeouts GoogleVertexAiTrainingPipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig">put_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload">put_model_to_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig">reset_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload">reset_model_to_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel">reset_parent_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

##### `put_input_data_config` <a name="put_input_data_config" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig"></a>

```python
def put_input_data_config(
  dataset_id: str,
  annotation_schema_uri: str = None,
  annotations_filter: str = None,
  bigquery_destination: GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination = None,
  filter_split: GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit = None,
  fraction_split: GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit = None,
  gcs_destination: GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination = None,
  persist_ml_use_assignment: bool | IResolvable = None,
  predefined_split: GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit = None,
  saved_query_id: str = None,
  stratified_split: GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit = None,
  timestamp_split: GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit = None
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.datasetId"></a>

- *Type:* str

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#dataset_id GoogleVertexAiTrainingPipeline#dataset_id}

---

###### `annotation_schema_uri`<sup>Optional</sup> <a name="annotation_schema_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.annotationSchemaUri"></a>

- *Type:* str

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotation_schema_uri GoogleVertexAiTrainingPipeline#annotation_schema_uri}

---

###### `annotations_filter`<sup>Optional</sup> <a name="annotations_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.annotationsFilter"></a>

- *Type:* str

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotations_filter GoogleVertexAiTrainingPipeline#annotations_filter}

---

###### `bigquery_destination`<sup>Optional</sup> <a name="bigquery_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.bigqueryDestination"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#bigquery_destination GoogleVertexAiTrainingPipeline#bigquery_destination}

---

###### `filter_split`<sup>Optional</sup> <a name="filter_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.filterSplit"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#filter_split GoogleVertexAiTrainingPipeline#filter_split}

---

###### `fraction_split`<sup>Optional</sup> <a name="fraction_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.fractionSplit"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#fraction_split GoogleVertexAiTrainingPipeline#fraction_split}

---

###### `gcs_destination`<sup>Optional</sup> <a name="gcs_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.gcsDestination"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#gcs_destination GoogleVertexAiTrainingPipeline#gcs_destination}

---

###### `persist_ml_use_assignment`<sup>Optional</sup> <a name="persist_ml_use_assignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.persistMlUseAssignment"></a>

- *Type:* bool | cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#persist_ml_use_assignment GoogleVertexAiTrainingPipeline#persist_ml_use_assignment}

---

###### `predefined_split`<sup>Optional</sup> <a name="predefined_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.predefinedSplit"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predefined_split GoogleVertexAiTrainingPipeline#predefined_split}

---

###### `saved_query_id`<sup>Optional</sup> <a name="saved_query_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.savedQueryId"></a>

- *Type:* str

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#saved_query_id GoogleVertexAiTrainingPipeline#saved_query_id}

---

###### `stratified_split`<sup>Optional</sup> <a name="stratified_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.stratifiedSplit"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#stratified_split GoogleVertexAiTrainingPipeline#stratified_split}

---

###### `timestamp_split`<sup>Optional</sup> <a name="timestamp_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.timestampSplit"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timestamp_split GoogleVertexAiTrainingPipeline#timestamp_split}

---

##### `put_model_to_upload` <a name="put_model_to_upload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload"></a>

```python
def put_model_to_upload(
  display_name: str,
  artifact_uri: str = None,
  container_spec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpec = None,
  description: str = None,
  encryption_spec: GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec = None,
  explanation_spec: GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec = None,
  labels: typing.Mapping[str] = None,
  version_aliases: typing.List[str] = None,
  version_description: str = None
) -> None
```

###### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.displayName"></a>

- *Type:* str

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

###### `artifact_uri`<sup>Optional</sup> <a name="artifact_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.artifactUri"></a>

- *Type:* str

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#artifact_uri GoogleVertexAiTrainingPipeline#artifact_uri}

---

###### `container_spec`<sup>Optional</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.containerSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_spec GoogleVertexAiTrainingPipeline#container_spec}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.description"></a>

- *Type:* str

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#description GoogleVertexAiTrainingPipeline#description}

---

###### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

###### `explanation_spec`<sup>Optional</sup> <a name="explanation_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.explanationSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#explanation_spec GoogleVertexAiTrainingPipeline#explanation_spec}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

###### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.versionAliases"></a>

- *Type:* typing.List[str]

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_aliases GoogleVertexAiTrainingPipeline#version_aliases}

---

###### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.versionDescription"></a>

- *Type:* str

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_description GoogleVertexAiTrainingPipeline#version_description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_data_config` <a name="reset_input_data_config" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig"></a>

```python
def reset_input_data_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_model_to_upload` <a name="reset_model_to_upload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload"></a>

```python
def reset_model_to_upload() -> None
```

##### `reset_parent_model` <a name="reset_parent_model" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel"></a>

```python
def reset_parent_model() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiTrainingPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiTrainingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiTrainingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload">model_to_upload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata">training_task_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput">input_data_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput">model_to_upload_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput">parent_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput">training_task_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput">training_task_inputs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel">parent_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition">training_task_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs">training_task_inputs</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a>

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error"></a>

```python
error: GoogleVertexAiTrainingPipelineErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a>

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig"></a>

```python
input_data_config: GoogleVertexAiTrainingPipelineInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a>

---

##### `model_to_upload`<sup>Required</sup> <a name="model_to_upload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload"></a>

```python
model_to_upload: GoogleVertexAiTrainingPipelineModelToUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts"></a>

```python
timeouts: GoogleVertexAiTrainingPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a>

---

##### `training_task_metadata`<sup>Required</sup> <a name="training_task_metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata"></a>

```python
training_task_metadata: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_data_config_input`<sup>Optional</sup> <a name="input_data_config_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput"></a>

```python
input_data_config_input: GoogleVertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `model_to_upload_input`<sup>Optional</sup> <a name="model_to_upload_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput"></a>

```python
model_to_upload_input: GoogleVertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---

##### `parent_model_input`<sup>Optional</sup> <a name="parent_model_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput"></a>

```python
parent_model_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiTrainingPipelineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---

##### `training_task_definition_input`<sup>Optional</sup> <a name="training_task_definition_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput"></a>

```python
training_task_definition_input: str
```

- *Type:* str

---

##### `training_task_inputs_input`<sup>Optional</sup> <a name="training_task_inputs_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput"></a>

```python
training_task_inputs_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `parent_model`<sup>Required</sup> <a name="parent_model" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel"></a>

```python
parent_model: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `training_task_definition`<sup>Required</sup> <a name="training_task_definition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition"></a>

```python
training_task_definition: str
```

- *Type:* str

---

##### `training_task_inputs`<sup>Required</sup> <a name="training_task_inputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs"></a>

```python
training_task_inputs: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiTrainingPipelineConfig <a name="GoogleVertexAiTrainingPipelineConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  model_id: str,
  training_task_definition: str,
  training_task_inputs: str,
  deletion_policy: str = None,
  encryption_spec: GoogleVertexAiTrainingPipelineEncryptionSpec = None,
  id: str = None,
  input_data_config: GoogleVertexAiTrainingPipelineInputDataConfig = None,
  labels: typing.Mapping[str] = None,
  model_to_upload: GoogleVertexAiTrainingPipelineModelToUpload = None,
  parent_model: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiTrainingPipelineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId">model_id</a></code> | <code>str</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition">training_task_definition</a></code> | <code>str</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs">training_task_inputs</a></code> | <code>str</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload">model_to_upload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel">parent_model</a></code> | <code>str</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region">region</a></code> | <code>str</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_id GoogleVertexAiTrainingPipeline#model_id}

---

##### `training_task_definition`<sup>Required</sup> <a name="training_task_definition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition"></a>

```python
training_task_definition: str
```

- *Type:* str

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_definition GoogleVertexAiTrainingPipeline#training_task_definition}

---

##### `training_task_inputs`<sup>Required</sup> <a name="training_task_inputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs"></a>

```python
training_task_inputs: str
```

- *Type:* str

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_inputs GoogleVertexAiTrainingPipeline#training_task_inputs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deletion_policy GoogleVertexAiTrainingPipeline#deletion_policy}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig"></a>

```python
input_data_config: GoogleVertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#input_data_config GoogleVertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `model_to_upload`<sup>Optional</sup> <a name="model_to_upload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload"></a>

```python
model_to_upload: GoogleVertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_to_upload GoogleVertexAiTrainingPipeline#model_to_upload}

---

##### `parent_model`<sup>Optional</sup> <a name="parent_model" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel"></a>

```python
parent_model: str
```

- *Type:* str

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parent_model GoogleVertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#region GoogleVertexAiTrainingPipeline#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiTrainingPipelineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeouts GoogleVertexAiTrainingPipeline#timeouts}

---

### GoogleVertexAiTrainingPipelineEncryptionSpec <a name="GoogleVertexAiTrainingPipelineEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineError <a name="GoogleVertexAiTrainingPipelineError" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError()
```


### GoogleVertexAiTrainingPipelineInputDataConfig <a name="GoogleVertexAiTrainingPipelineInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig(
  dataset_id: str,
  annotation_schema_uri: str = None,
  annotations_filter: str = None,
  bigquery_destination: GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination = None,
  filter_split: GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit = None,
  fraction_split: GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit = None,
  gcs_destination: GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination = None,
  persist_ml_use_assignment: bool | IResolvable = None,
  predefined_split: GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit = None,
  saved_query_id: str = None,
  stratified_split: GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit = None,
  timestamp_split: GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the Dataset in the same Project and Location which data will be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri">annotation_schema_uri</a></code> | <code>str</code> | Applicable only to custom training with Datasets that have DataItems and Annotations. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter">annotations_filter</a></code> | <code>str</code> | Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit">filter_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | filter_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit">fraction_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | fraction_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination">gcs_destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | gcs_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment">persist_ml_use_assignment</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to persist the ML use assignment to data item system labels. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit">predefined_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | predefined_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId">saved_query_id</a></code> | <code>str</code> | Only applicable to Datasets that have SavedQueries. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit">stratified_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | stratified_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit">timestamp_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | timestamp_split block. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#dataset_id GoogleVertexAiTrainingPipeline#dataset_id}

---

##### `annotation_schema_uri`<sup>Optional</sup> <a name="annotation_schema_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri"></a>

```python
annotation_schema_uri: str
```

- *Type:* str

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotation_schema_uri GoogleVertexAiTrainingPipeline#annotation_schema_uri}

---

##### `annotations_filter`<sup>Optional</sup> <a name="annotations_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter"></a>

```python
annotations_filter: str
```

- *Type:* str

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotations_filter GoogleVertexAiTrainingPipeline#annotations_filter}

---

##### `bigquery_destination`<sup>Optional</sup> <a name="bigquery_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination"></a>

```python
bigquery_destination: GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#bigquery_destination GoogleVertexAiTrainingPipeline#bigquery_destination}

---

##### `filter_split`<sup>Optional</sup> <a name="filter_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit"></a>

```python
filter_split: GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#filter_split GoogleVertexAiTrainingPipeline#filter_split}

---

##### `fraction_split`<sup>Optional</sup> <a name="fraction_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit"></a>

```python
fraction_split: GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#fraction_split GoogleVertexAiTrainingPipeline#fraction_split}

---

##### `gcs_destination`<sup>Optional</sup> <a name="gcs_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination"></a>

```python
gcs_destination: GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#gcs_destination GoogleVertexAiTrainingPipeline#gcs_destination}

---

##### `persist_ml_use_assignment`<sup>Optional</sup> <a name="persist_ml_use_assignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment"></a>

```python
persist_ml_use_assignment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#persist_ml_use_assignment GoogleVertexAiTrainingPipeline#persist_ml_use_assignment}

---

##### `predefined_split`<sup>Optional</sup> <a name="predefined_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit"></a>

```python
predefined_split: GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predefined_split GoogleVertexAiTrainingPipeline#predefined_split}

---

##### `saved_query_id`<sup>Optional</sup> <a name="saved_query_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId"></a>

```python
saved_query_id: str
```

- *Type:* str

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#saved_query_id GoogleVertexAiTrainingPipeline#saved_query_id}

---

##### `stratified_split`<sup>Optional</sup> <a name="stratified_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit"></a>

```python
stratified_split: GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#stratified_split GoogleVertexAiTrainingPipeline#stratified_split}

---

##### `timestamp_split`<sup>Optional</sup> <a name="timestamp_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit"></a>

```python
timestamp_split: GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timestamp_split GoogleVertexAiTrainingPipeline#timestamp_split}

---

### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination(
  output_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri">output_uri</a></code> | <code>str</code> | The BigQuery table to which the output is to be written. |

---

##### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri"></a>

```python
output_uri: str
```

- *Type:* str

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri GoogleVertexAiTrainingPipeline#output_uri}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit(
  test_filter: str,
  training_filter: str,
  validation_filter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter">test_filter</a></code> | <code>str</code> | A filter on DataItems of the Dataset for test set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter">training_filter</a></code> | <code>str</code> | A filter on DataItems of the Dataset for training set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter">validation_filter</a></code> | <code>str</code> | A filter on DataItems of the Dataset for validation set. |

---

##### `test_filter`<sup>Required</sup> <a name="test_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter"></a>

```python
test_filter: str
```

- *Type:* str

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_filter GoogleVertexAiTrainingPipeline#test_filter}

---

##### `training_filter`<sup>Required</sup> <a name="training_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter"></a>

```python
training_filter: str
```

- *Type:* str

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_filter GoogleVertexAiTrainingPipeline#training_filter}

---

##### `validation_filter`<sup>Required</sup> <a name="validation_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter"></a>

```python
validation_filter: str
```

- *Type:* str

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_filter GoogleVertexAiTrainingPipeline#validation_filter}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit(
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination(
  output_uri_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix">output_uri_prefix</a></code> | <code>str</code> | The Cloud Storage URI prefix to write to. |

---

##### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix"></a>

```python
output_uri_prefix: str
```

- *Type:* str

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri_prefix GoogleVertexAiTrainingPipeline#output_uri_prefix}

---

### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit(
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key">key</a></code> | <code>str</code> | The key is a name of one of the Dataset's data columns. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key"></a>

```python
key: str
```

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key">key</a></code> | <code>str</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key"></a>

```python
key: str
```

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key">key</a></code> | <code>str</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key"></a>

```python
key: str
```

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineModelToUpload <a name="GoogleVertexAiTrainingPipelineModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload(
  display_name: str,
  artifact_uri: str = None,
  container_spec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpec = None,
  description: str = None,
  encryption_spec: GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec = None,
  explanation_spec: GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec = None,
  labels: typing.Mapping[str] = None,
  version_aliases: typing.List[str] = None,
  version_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri">artifact_uri</a></code> | <code>str</code> | The path to the directory containing the Model artifact and any of its supporting files. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description">description</a></code> | <code>str</code> | The description of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec">explanation_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | explanation_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your Models. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases">version_aliases</a></code> | <code>typing.List[str]</code> | User provided version aliases so that a model version can be referenced using alias. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription">version_description</a></code> | <code>str</code> | The description of this version. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `artifact_uri`<sup>Optional</sup> <a name="artifact_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri"></a>

```python
artifact_uri: str
```

- *Type:* str

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#artifact_uri GoogleVertexAiTrainingPipeline#artifact_uri}

---

##### `container_spec`<sup>Optional</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec"></a>

```python
container_spec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_spec GoogleVertexAiTrainingPipeline#container_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#description GoogleVertexAiTrainingPipeline#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `explanation_spec`<sup>Optional</sup> <a name="explanation_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec"></a>

```python
explanation_spec: GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#explanation_spec GoogleVertexAiTrainingPipeline#explanation_spec}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases"></a>

```python
version_aliases: typing.List[str]
```

- *Type:* typing.List[str]

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_aliases GoogleVertexAiTrainingPipeline#version_aliases}

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_description GoogleVertexAiTrainingPipeline#version_description}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec(
  image_uri: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  deployment_timeout: str = None,
  env: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv] = None,
  grpc_ports: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts] = None,
  health_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe = None,
  health_route: str = None,
  ports: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts] = None,
  predict_route: str = None,
  shared_memory_size_mb: str = None,
  startup_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri">image_uri</a></code> | <code>str</code> | URI of the Docker image to be used as the custom container for serving predictions. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args">args</a></code> | <code>typing.List[str]</code> | Specifies the arguments to the command when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command">command</a></code> | <code>typing.List[str]</code> | Specifies the command that runs when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout">deployment_timeout</a></code> | <code>str</code> | Deployment timeout. Limit for deployment timeout is 2 hours. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env">env</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts">grpc_ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]</code> | grpc_ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe">health_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute">health_route</a></code> | <code>str</code> | HTTP path on the container to send health checks to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports">ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]</code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute">predict_route</a></code> | <code>str</code> | HTTP path on the container to send prediction requests to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb">shared_memory_size_mb</a></code> | <code>str</code> | The amount of the VM memory to reserve as the shared memory for the model in megabytes. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | startup_probe block. |

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#image_uri GoogleVertexAiTrainingPipeline#image_uri}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#args GoogleVertexAiTrainingPipeline#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

##### `deployment_timeout`<sup>Optional</sup> <a name="deployment_timeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout"></a>

```python
deployment_timeout: str
```

- *Type:* str

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deployment_timeout GoogleVertexAiTrainingPipeline#deployment_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env"></a>

```python
env: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#env GoogleVertexAiTrainingPipeline#env}

---

##### `grpc_ports`<sup>Optional</sup> <a name="grpc_ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts"></a>

```python
grpc_ports: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#grpc_ports GoogleVertexAiTrainingPipeline#grpc_ports}

---

##### `health_probe`<sup>Optional</sup> <a name="health_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe"></a>

```python
health_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_probe GoogleVertexAiTrainingPipeline#health_probe}

---

##### `health_route`<sup>Optional</sup> <a name="health_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute"></a>

```python
health_route: str
```

- *Type:* str

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_route GoogleVertexAiTrainingPipeline#health_route}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports"></a>

```python
ports: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#ports GoogleVertexAiTrainingPipeline#ports}

---

##### `predict_route`<sup>Optional</sup> <a name="predict_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute"></a>

```python
predict_route: str
```

- *Type:* str

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predict_route GoogleVertexAiTrainingPipeline#predict_route}

---

##### `shared_memory_size_mb`<sup>Optional</sup> <a name="shared_memory_size_mb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb"></a>

```python
shared_memory_size_mb: str
```

- *Type:* str

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#shared_memory_size_mb GoogleVertexAiTrainingPipeline#shared_memory_size_mb}

---

##### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe"></a>

```python
startup_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#startup_probe GoogleVertexAiTrainingPipeline#startup_probe}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name">name</a></code> | <code>str</code> | The name of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value">value</a></code> | <code>str</code> | The value of the environment variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#name GoogleVertexAiTrainingPipeline#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#value GoogleVertexAiTrainingPipeline#value}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts(
  container_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | The number of the port on the container. |

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe(
  exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec"></a>

```python
exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec(
  command: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command">command</a></code> | <code>typing.List[str]</code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts(
  container_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | The number of the port on the container. |

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe(
  exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec"></a>

```python
exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec(
  command: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command">command</a></code> | <code>typing.List[str]</code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec(
  metadata: str = None,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata">metadata</a></code> | <code>str</code> | Metadata describing the Model's input and output for explanation. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters">parameters</a></code> | <code>str</code> | Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#metadata GoogleVertexAiTrainingPipeline#metadata}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parameters GoogleVertexAiTrainingPipeline#parameters}

---

### GoogleVertexAiTrainingPipelineTimeouts <a name="GoogleVertexAiTrainingPipelineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineErrorList <a name="GoogleVertexAiTrainingPipelineErrorList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiTrainingPipelineErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiTrainingPipelineErrorOutputReference <a name="GoogleVertexAiTrainingPipelineErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput">output_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri">output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_uri_input`<sup>Optional</sup> <a name="output_uri_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```python
output_uri_input: str
```

- *Type:* str

---

##### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```python
output_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput">test_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput">training_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput">validation_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter">test_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter">training_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter">validation_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `test_filter_input`<sup>Optional</sup> <a name="test_filter_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput"></a>

```python
test_filter_input: str
```

- *Type:* str

---

##### `training_filter_input`<sup>Optional</sup> <a name="training_filter_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput"></a>

```python
training_filter_input: str
```

- *Type:* str

---

##### `validation_filter_input`<sup>Optional</sup> <a name="validation_filter_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput"></a>

```python
validation_filter_input: str
```

- *Type:* str

---

##### `test_filter`<sup>Required</sup> <a name="test_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter"></a>

```python
test_filter: str
```

- *Type:* str

---

##### `training_filter`<sup>Required</sup> <a name="training_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter"></a>

```python
training_filter: str
```

- *Type:* str

---

##### `validation_filter`<sup>Required</sup> <a name="validation_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter"></a>

```python
validation_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction">reset_test_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction">reset_training_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction">reset_validation_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_test_fraction` <a name="reset_test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction"></a>

```python
def reset_test_fraction() -> None
```

##### `reset_training_fraction` <a name="reset_training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction"></a>

```python
def reset_training_fraction() -> None
```

##### `reset_validation_fraction` <a name="reset_validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction"></a>

```python
def reset_validation_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput">test_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput">training_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput">validation_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `test_fraction_input`<sup>Optional</sup> <a name="test_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput"></a>

```python
test_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction_input`<sup>Optional</sup> <a name="training_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput"></a>

```python
training_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction_input`<sup>Optional</sup> <a name="validation_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput"></a>

```python
validation_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `test_fraction`<sup>Required</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction`<sup>Required</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput">output_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix">output_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_uri_prefix_input`<sup>Optional</sup> <a name="output_uri_prefix_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput"></a>

```python
output_uri_prefix_input: str
```

- *Type:* str

---

##### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix"></a>

```python
output_uri_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination">put_bigquery_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit">put_filter_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit">put_fraction_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination">put_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit">put_predefined_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit">put_stratified_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit">put_timestamp_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri">reset_annotation_schema_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter">reset_annotations_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination">reset_bigquery_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit">reset_filter_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit">reset_fraction_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination">reset_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment">reset_persist_ml_use_assignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit">reset_predefined_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId">reset_saved_query_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit">reset_stratified_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit">reset_timestamp_split</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_destination` <a name="put_bigquery_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination"></a>

```python
def put_bigquery_destination(
  output_uri: str
) -> None
```

###### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination.parameter.outputUri"></a>

- *Type:* str

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri GoogleVertexAiTrainingPipeline#output_uri}

---

##### `put_filter_split` <a name="put_filter_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit"></a>

```python
def put_filter_split(
  test_filter: str,
  training_filter: str,
  validation_filter: str
) -> None
```

###### `test_filter`<sup>Required</sup> <a name="test_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.testFilter"></a>

- *Type:* str

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_filter GoogleVertexAiTrainingPipeline#test_filter}

---

###### `training_filter`<sup>Required</sup> <a name="training_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.trainingFilter"></a>

- *Type:* str

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_filter GoogleVertexAiTrainingPipeline#training_filter}

---

###### `validation_filter`<sup>Required</sup> <a name="validation_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.validationFilter"></a>

- *Type:* str

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_filter GoogleVertexAiTrainingPipeline#validation_filter}

---

##### `put_fraction_split` <a name="put_fraction_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit"></a>

```python
def put_fraction_split(
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
) -> None
```

###### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.testFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

###### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.trainingFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

###### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.validationFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

##### `put_gcs_destination` <a name="put_gcs_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination"></a>

```python
def put_gcs_destination(
  output_uri_prefix: str
) -> None
```

###### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination.parameter.outputUriPrefix"></a>

- *Type:* str

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri_prefix GoogleVertexAiTrainingPipeline#output_uri_prefix}

---

##### `put_predefined_split` <a name="put_predefined_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit"></a>

```python
def put_predefined_split(
  key: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit.parameter.key"></a>

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `put_stratified_split` <a name="put_stratified_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit"></a>

```python
def put_stratified_split(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.key"></a>

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

###### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.testFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

###### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.trainingFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

###### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.validationFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

##### `put_timestamp_split` <a name="put_timestamp_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit"></a>

```python
def put_timestamp_split(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.key"></a>

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

###### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.testFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

###### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.trainingFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

###### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.validationFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

##### `reset_annotation_schema_uri` <a name="reset_annotation_schema_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri"></a>

```python
def reset_annotation_schema_uri() -> None
```

##### `reset_annotations_filter` <a name="reset_annotations_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter"></a>

```python
def reset_annotations_filter() -> None
```

##### `reset_bigquery_destination` <a name="reset_bigquery_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination"></a>

```python
def reset_bigquery_destination() -> None
```

##### `reset_filter_split` <a name="reset_filter_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit"></a>

```python
def reset_filter_split() -> None
```

##### `reset_fraction_split` <a name="reset_fraction_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit"></a>

```python
def reset_fraction_split() -> None
```

##### `reset_gcs_destination` <a name="reset_gcs_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination"></a>

```python
def reset_gcs_destination() -> None
```

##### `reset_persist_ml_use_assignment` <a name="reset_persist_ml_use_assignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment"></a>

```python
def reset_persist_ml_use_assignment() -> None
```

##### `reset_predefined_split` <a name="reset_predefined_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit"></a>

```python
def reset_predefined_split() -> None
```

##### `reset_saved_query_id` <a name="reset_saved_query_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId"></a>

```python
def reset_saved_query_id() -> None
```

##### `reset_stratified_split` <a name="reset_stratified_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit"></a>

```python
def reset_stratified_split() -> None
```

##### `reset_timestamp_split` <a name="reset_timestamp_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit"></a>

```python
def reset_timestamp_split() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit">filter_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit">fraction_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination">gcs_destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit">predefined_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit">stratified_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit">timestamp_split</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput">annotation_schema_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput">annotations_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput">bigquery_destination_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput">filter_split_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput">fraction_split_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput">gcs_destination_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput">persist_ml_use_assignment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput">predefined_split_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput">saved_query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput">stratified_split_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput">timestamp_split_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri">annotation_schema_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter">annotations_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment">persist_ml_use_assignment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId">saved_query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_destination`<sup>Required</sup> <a name="bigquery_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination"></a>

```python
bigquery_destination: GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a>

---

##### `filter_split`<sup>Required</sup> <a name="filter_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit"></a>

```python
filter_split: GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a>

---

##### `fraction_split`<sup>Required</sup> <a name="fraction_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit"></a>

```python
fraction_split: GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a>

---

##### `gcs_destination`<sup>Required</sup> <a name="gcs_destination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination"></a>

```python
gcs_destination: GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a>

---

##### `predefined_split`<sup>Required</sup> <a name="predefined_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit"></a>

```python
predefined_split: GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a>

---

##### `stratified_split`<sup>Required</sup> <a name="stratified_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit"></a>

```python
stratified_split: GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a>

---

##### `timestamp_split`<sup>Required</sup> <a name="timestamp_split" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit"></a>

```python
timestamp_split: GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a>

---

##### `annotation_schema_uri_input`<sup>Optional</sup> <a name="annotation_schema_uri_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput"></a>

```python
annotation_schema_uri_input: str
```

- *Type:* str

---

##### `annotations_filter_input`<sup>Optional</sup> <a name="annotations_filter_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput"></a>

```python
annotations_filter_input: str
```

- *Type:* str

---

##### `bigquery_destination_input`<sup>Optional</sup> <a name="bigquery_destination_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput"></a>

```python
bigquery_destination_input: GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `filter_split_input`<sup>Optional</sup> <a name="filter_split_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput"></a>

```python
filter_split_input: GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `fraction_split_input`<sup>Optional</sup> <a name="fraction_split_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput"></a>

```python
fraction_split_input: GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `gcs_destination_input`<sup>Optional</sup> <a name="gcs_destination_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput"></a>

```python
gcs_destination_input: GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `persist_ml_use_assignment_input`<sup>Optional</sup> <a name="persist_ml_use_assignment_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput"></a>

```python
persist_ml_use_assignment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `predefined_split_input`<sup>Optional</sup> <a name="predefined_split_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput"></a>

```python
predefined_split_input: GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `saved_query_id_input`<sup>Optional</sup> <a name="saved_query_id_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput"></a>

```python
saved_query_id_input: str
```

- *Type:* str

---

##### `stratified_split_input`<sup>Optional</sup> <a name="stratified_split_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput"></a>

```python
stratified_split_input: GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `timestamp_split_input`<sup>Optional</sup> <a name="timestamp_split_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput"></a>

```python
timestamp_split_input: GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `annotation_schema_uri`<sup>Required</sup> <a name="annotation_schema_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri"></a>

```python
annotation_schema_uri: str
```

- *Type:* str

---

##### `annotations_filter`<sup>Required</sup> <a name="annotations_filter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter"></a>

```python
annotations_filter: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `persist_ml_use_assignment`<sup>Required</sup> <a name="persist_ml_use_assignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment"></a>

```python
persist_ml_use_assignment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `saved_query_id`<sup>Required</sup> <a name="saved_query_id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId"></a>

```python
saved_query_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction">reset_test_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction">reset_training_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction">reset_validation_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_test_fraction` <a name="reset_test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction"></a>

```python
def reset_test_fraction() -> None
```

##### `reset_training_fraction` <a name="reset_training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction"></a>

```python
def reset_training_fraction() -> None
```

##### `reset_validation_fraction` <a name="reset_validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction"></a>

```python
def reset_validation_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput">test_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput">training_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput">validation_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `test_fraction_input`<sup>Optional</sup> <a name="test_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput"></a>

```python
test_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction_input`<sup>Optional</sup> <a name="training_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput"></a>

```python
training_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction_input`<sup>Optional</sup> <a name="validation_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput"></a>

```python
validation_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `test_fraction`<sup>Required</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction`<sup>Required</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction">reset_test_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction">reset_training_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction">reset_validation_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_test_fraction` <a name="reset_test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction"></a>

```python
def reset_test_fraction() -> None
```

##### `reset_training_fraction` <a name="reset_training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction"></a>

```python
def reset_training_fraction() -> None
```

##### `reset_validation_fraction` <a name="reset_validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction"></a>

```python
def reset_validation_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput">test_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput">training_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput">validation_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `test_fraction_input`<sup>Optional</sup> <a name="test_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput"></a>

```python
test_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction_input`<sup>Optional</sup> <a name="training_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput"></a>

```python
training_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction_input`<sup>Optional</sup> <a name="validation_fraction_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput"></a>

```python
validation_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `test_fraction`<sup>Required</sup> <a name="test_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction`<sup>Required</sup> <a name="validation_fraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand">reset_command</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec">put_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec">reset_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exec` <a name="put_exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec"></a>

```python
def put_exec(
  command: typing.List[str] = None
) -> None
```

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec.parameter.command"></a>

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

##### `reset_exec` <a name="reset_exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec"></a>

```python
def reset_exec() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput">exec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec"></a>

```python
exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a>

---

##### `exec_input`<sup>Optional</sup> <a name="exec_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput"></a>

```python
exec_input: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts">put_grpc_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe">put_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe">put_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout">reset_deployment_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts">reset_grpc_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe">reset_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute">reset_health_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute">reset_predict_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb">reset_shared_memory_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe">reset_startup_probe</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv"></a>

```python
def put_env(
  value: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

---

##### `put_grpc_ports` <a name="put_grpc_ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts"></a>

```python
def put_grpc_ports(
  value: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

---

##### `put_health_probe` <a name="put_health_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe"></a>

```python
def put_health_probe(
  exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.exec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

##### `put_ports` <a name="put_ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts"></a>

```python
def put_ports(
  value: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

---

##### `put_startup_probe` <a name="put_startup_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe"></a>

```python
def put_startup_probe(
  exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.exec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_deployment_timeout` <a name="reset_deployment_timeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout"></a>

```python
def reset_deployment_timeout() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_grpc_ports` <a name="reset_grpc_ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts"></a>

```python
def reset_grpc_ports() -> None
```

##### `reset_health_probe` <a name="reset_health_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe"></a>

```python
def reset_health_probe() -> None
```

##### `reset_health_route` <a name="reset_health_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute"></a>

```python
def reset_health_route() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_predict_route` <a name="reset_predict_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute"></a>

```python
def reset_predict_route() -> None
```

##### `reset_shared_memory_size_mb` <a name="reset_shared_memory_size_mb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb"></a>

```python
def reset_shared_memory_size_mb() -> None
```

##### `reset_startup_probe` <a name="reset_startup_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe"></a>

```python
def reset_startup_probe() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts">grpc_ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe">health_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput">deployment_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput">env_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput">grpc_ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput">health_probe_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput">health_route_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput">ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput">predict_route_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput">shared_memory_size_mb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput">startup_probe_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout">deployment_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute">health_route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute">predict_route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb">shared_memory_size_mb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env"></a>

```python
env: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a>

---

##### `grpc_ports`<sup>Required</sup> <a name="grpc_ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts"></a>

```python
grpc_ports: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a>

---

##### `health_probe`<sup>Required</sup> <a name="health_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe"></a>

```python
health_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports"></a>

```python
ports: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a>

---

##### `startup_probe`<sup>Required</sup> <a name="startup_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe"></a>

```python
startup_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_timeout_input`<sup>Optional</sup> <a name="deployment_timeout_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput"></a>

```python
deployment_timeout_input: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput"></a>

```python
env_input: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

---

##### `grpc_ports_input`<sup>Optional</sup> <a name="grpc_ports_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput"></a>

```python
grpc_ports_input: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

---

##### `health_probe_input`<sup>Optional</sup> <a name="health_probe_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput"></a>

```python
health_probe_input: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `health_route_input`<sup>Optional</sup> <a name="health_route_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput"></a>

```python
health_route_input: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput"></a>

```python
ports_input: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

---

##### `predict_route_input`<sup>Optional</sup> <a name="predict_route_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput"></a>

```python
predict_route_input: str
```

- *Type:* str

---

##### `shared_memory_size_mb_input`<sup>Optional</sup> <a name="shared_memory_size_mb_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput"></a>

```python
shared_memory_size_mb_input: str
```

- *Type:* str

---

##### `startup_probe_input`<sup>Optional</sup> <a name="startup_probe_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput"></a>

```python
startup_probe_input: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_timeout`<sup>Required</sup> <a name="deployment_timeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout"></a>

```python
deployment_timeout: str
```

- *Type:* str

---

##### `health_route`<sup>Required</sup> <a name="health_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute"></a>

```python
health_route: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `predict_route`<sup>Required</sup> <a name="predict_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute"></a>

```python
predict_route: str
```

- *Type:* str

---

##### `shared_memory_size_mb`<sup>Required</sup> <a name="shared_memory_size_mb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb"></a>

```python
shared_memory_size_mb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand">reset_command</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec">put_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec">reset_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exec` <a name="put_exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec"></a>

```python
def put_exec(
  command: typing.List[str] = None
) -> None
```

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec.parameter.command"></a>

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

##### `reset_exec` <a name="reset_exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec"></a>

```python
def reset_exec() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput">exec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec"></a>

```python
exec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a>

---

##### `exec_input`<sup>Optional</sup> <a name="exec_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput"></a>

```python
exec_input: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec">put_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec">put_explanation_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri">reset_artifact_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec">reset_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec">reset_explanation_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases">reset_version_aliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription">reset_version_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_spec` <a name="put_container_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec"></a>

```python
def put_container_spec(
  image_uri: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  deployment_timeout: str = None,
  env: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv] = None,
  grpc_ports: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts] = None,
  health_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe = None,
  health_route: str = None,
  ports: IResolvable | typing.List[GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts] = None,
  predict_route: str = None,
  shared_memory_size_mb: str = None,
  startup_probe: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe = None
) -> None
```

###### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.imageUri"></a>

- *Type:* str

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#image_uri GoogleVertexAiTrainingPipeline#image_uri}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.args"></a>

- *Type:* typing.List[str]

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#args GoogleVertexAiTrainingPipeline#args}

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.command"></a>

- *Type:* typing.List[str]

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

###### `deployment_timeout`<sup>Optional</sup> <a name="deployment_timeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.deploymentTimeout"></a>

- *Type:* str

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deployment_timeout GoogleVertexAiTrainingPipeline#deployment_timeout}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.env"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#env GoogleVertexAiTrainingPipeline#env}

---

###### `grpc_ports`<sup>Optional</sup> <a name="grpc_ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.grpcPorts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#grpc_ports GoogleVertexAiTrainingPipeline#grpc_ports}

---

###### `health_probe`<sup>Optional</sup> <a name="health_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.healthProbe"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_probe GoogleVertexAiTrainingPipeline#health_probe}

---

###### `health_route`<sup>Optional</sup> <a name="health_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.healthRoute"></a>

- *Type:* str

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_route GoogleVertexAiTrainingPipeline#health_route}

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.ports"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#ports GoogleVertexAiTrainingPipeline#ports}

---

###### `predict_route`<sup>Optional</sup> <a name="predict_route" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.predictRoute"></a>

- *Type:* str

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predict_route GoogleVertexAiTrainingPipeline#predict_route}

---

###### `shared_memory_size_mb`<sup>Optional</sup> <a name="shared_memory_size_mb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.sharedMemorySizeMb"></a>

- *Type:* str

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#shared_memory_size_mb GoogleVertexAiTrainingPipeline#shared_memory_size_mb}

---

###### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.startupProbe"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#startup_probe GoogleVertexAiTrainingPipeline#startup_probe}

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

##### `put_explanation_spec` <a name="put_explanation_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec"></a>

```python
def put_explanation_spec(
  metadata: str = None,
  parameters: str = None
) -> None
```

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.metadata"></a>

- *Type:* str

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#metadata GoogleVertexAiTrainingPipeline#metadata}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.parameters"></a>

- *Type:* str

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parameters GoogleVertexAiTrainingPipeline#parameters}

---

##### `reset_artifact_uri` <a name="reset_artifact_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri"></a>

```python
def reset_artifact_uri() -> None
```

##### `reset_container_spec` <a name="reset_container_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec"></a>

```python
def reset_container_spec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_explanation_spec` <a name="reset_explanation_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec"></a>

```python
def reset_explanation_spec() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_version_aliases` <a name="reset_version_aliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases"></a>

```python
def reset_version_aliases() -> None
```

##### `reset_version_description` <a name="reset_version_description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription"></a>

```python
def reset_version_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec">explanation_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput">artifact_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput">container_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput">explanation_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput">version_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput">version_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri">artifact_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases">version_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_spec`<sup>Required</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec"></a>

```python
container_spec: GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a>

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a>

---

##### `explanation_spec`<sup>Required</sup> <a name="explanation_spec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec"></a>

```python
explanation_spec: GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `artifact_uri_input`<sup>Optional</sup> <a name="artifact_uri_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput"></a>

```python
artifact_uri_input: str
```

- *Type:* str

---

##### `container_spec_input`<sup>Optional</sup> <a name="container_spec_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput"></a>

```python
container_spec_input: GoogleVertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `explanation_spec_input`<sup>Optional</sup> <a name="explanation_spec_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput"></a>

```python
explanation_spec_input: GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_aliases_input`<sup>Optional</sup> <a name="version_aliases_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput"></a>

```python
version_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_description_input`<sup>Optional</sup> <a name="version_description_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput"></a>

```python
version_description_input: str
```

- *Type:* str

---

##### `artifact_uri`<sup>Required</sup> <a name="artifact_uri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri"></a>

```python
artifact_uri: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases"></a>

```python
version_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---


### GoogleVertexAiTrainingPipelineTimeoutsOutputReference <a name="GoogleVertexAiTrainingPipelineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_training_pipeline

googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiTrainingPipelineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---



