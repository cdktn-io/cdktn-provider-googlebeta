# `googleVertexAiEvaluationMetric` Submodule <a name="`googleVertexAiEvaluationMetric` Submodule" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEvaluationMetric <a name="GoogleVertexAiEvaluationMetric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric google_vertex_ai_evaluation_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric(
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
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: GoogleVertexAiEvaluationMetricEncryptionSpec = None,
  evaluation_metric_id: str = None,
  gcs_uri: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metric: str = None,
  project: str = None,
  timeouts: GoogleVertexAiEvaluationMetricTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-friendly display name for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the EvaluationMetric. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.evaluationMetricId">evaluation_metric_id</a></code> | <code>str</code> | The ID to use for the EvaluationMetric, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.gcsUri">gcs_uri</a></code> | <code>str</code> | The Google Cloud Storage URI that stores the metric specification. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.metric">metric</a></code> | <code>str</code> | The metric configuration as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.displayName"></a>

- *Type:* str

The user-friendly display name for the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#display_name GoogleVertexAiEvaluationMetric#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.region"></a>

- *Type:* str

The region of the EvaluationMetric. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#region GoogleVertexAiEvaluationMetric#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#deletion_policy GoogleVertexAiEvaluationMetric#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.description"></a>

- *Type:* str

A description of the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#description GoogleVertexAiEvaluationMetric#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#encryption_spec GoogleVertexAiEvaluationMetric#encryption_spec}

---

##### `evaluation_metric_id`<sup>Optional</sup> <a name="evaluation_metric_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.evaluationMetricId"></a>

- *Type:* str

The ID to use for the EvaluationMetric, which will become the final component of the resource name.

This value should be 1-63 characters,
and valid characters are /[a-z][0-9]-/. The first character must be
a lowercase letter, and the last character must be a lowercase letter
or number. If not provided, the server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#evaluation_metric_id GoogleVertexAiEvaluationMetric#evaluation_metric_id}

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.gcsUri"></a>

- *Type:* str

The Google Cloud Storage URI that stores the metric specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#gcs_uri GoogleVertexAiEvaluationMetric#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for the EvaluationMetric.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#labels GoogleVertexAiEvaluationMetric#labels}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.metric"></a>

- *Type:* str

The metric configuration as a JSON string.

Uses camelCase field names
to match the API format. Supports LLM-based metrics and custom code
execution metrics.
See the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)
for the full schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#metric GoogleVertexAiEvaluationMetric#metric}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#timeouts GoogleVertexAiEvaluationMetric#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEvaluationMetricId">reset_evaluation_metric_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetGcsUri">reset_gcs_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed encryption key
used to protect a resource. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#kms_key_name GoogleVertexAiEvaluationMetric#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#create GoogleVertexAiEvaluationMetric#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#delete GoogleVertexAiEvaluationMetric#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#update GoogleVertexAiEvaluationMetric#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_evaluation_metric_id` <a name="reset_evaluation_metric_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEvaluationMetricId"></a>

```python
def reset_evaluation_metric_id() -> None
```

##### `reset_gcs_uri` <a name="reset_gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetGcsUri"></a>

```python
def reset_gcs_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiEvaluationMetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiEvaluationMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiEvaluationMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference">GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference">GoogleVertexAiEvaluationMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricIdInput">evaluation_metric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUriInput">gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricId">evaluation_metric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUri">gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference">GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeouts"></a>

```python
timeouts: GoogleVertexAiEvaluationMetricTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference">GoogleVertexAiEvaluationMetricTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiEvaluationMetricEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---

##### `evaluation_metric_id_input`<sup>Optional</sup> <a name="evaluation_metric_id_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricIdInput"></a>

```python
evaluation_metric_id_input: str
```

- *Type:* str

---

##### `gcs_uri_input`<sup>Optional</sup> <a name="gcs_uri_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUriInput"></a>

```python
gcs_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiEvaluationMetricTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `evaluation_metric_id`<sup>Required</sup> <a name="evaluation_metric_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricId"></a>

```python
evaluation_metric_id: str
```

- *Type:* str

---

##### `gcs_uri`<sup>Required</sup> <a name="gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEvaluationMetricConfig <a name="GoogleVertexAiEvaluationMetricConfig" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: GoogleVertexAiEvaluationMetricEncryptionSpec = None,
  evaluation_metric_id: str = None,
  gcs_uri: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metric: str = None,
  project: str = None,
  timeouts: GoogleVertexAiEvaluationMetricTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-friendly display name for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.region">region</a></code> | <code>str</code> | The region of the EvaluationMetric. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.description">description</a></code> | <code>str</code> | A description of the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.evaluationMetricId">evaluation_metric_id</a></code> | <code>str</code> | The ID to use for the EvaluationMetric, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.gcsUri">gcs_uri</a></code> | <code>str</code> | The Google Cloud Storage URI that stores the metric specification. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.metric">metric</a></code> | <code>str</code> | The metric configuration as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-friendly display name for the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#display_name GoogleVertexAiEvaluationMetric#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the EvaluationMetric. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#region GoogleVertexAiEvaluationMetric#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#deletion_policy GoogleVertexAiEvaluationMetric#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#description GoogleVertexAiEvaluationMetric#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiEvaluationMetricEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#encryption_spec GoogleVertexAiEvaluationMetric#encryption_spec}

---

##### `evaluation_metric_id`<sup>Optional</sup> <a name="evaluation_metric_id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.evaluationMetricId"></a>

```python
evaluation_metric_id: str
```

- *Type:* str

The ID to use for the EvaluationMetric, which will become the final component of the resource name.

This value should be 1-63 characters,
and valid characters are /[a-z][0-9]-/. The first character must be
a lowercase letter, and the last character must be a lowercase letter
or number. If not provided, the server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#evaluation_metric_id GoogleVertexAiEvaluationMetric#evaluation_metric_id}

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

The Google Cloud Storage URI that stores the metric specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#gcs_uri GoogleVertexAiEvaluationMetric#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for the EvaluationMetric.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#labels GoogleVertexAiEvaluationMetric#labels}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.metric"></a>

```python
metric: str
```

- *Type:* str

The metric configuration as a JSON string.

Uses camelCase field names
to match the API format. Supports LLM-based metrics and custom code
execution metrics.
See the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)
for the full schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#metric GoogleVertexAiEvaluationMetric#metric}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiEvaluationMetricTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#timeouts GoogleVertexAiEvaluationMetric#timeouts}

---

### GoogleVertexAiEvaluationMetricEncryptionSpec <a name="GoogleVertexAiEvaluationMetricEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Required. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed encryption key
used to protect a resource. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#kms_key_name GoogleVertexAiEvaluationMetric#kms_key_name}

---

### GoogleVertexAiEvaluationMetricTimeouts <a name="GoogleVertexAiEvaluationMetricTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#create GoogleVertexAiEvaluationMetric#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#delete GoogleVertexAiEvaluationMetric#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#update GoogleVertexAiEvaluationMetric#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#create GoogleVertexAiEvaluationMetric#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#delete GoogleVertexAiEvaluationMetric#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_evaluation_metric#update GoogleVertexAiEvaluationMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference <a name="GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiEvaluationMetricEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---


### GoogleVertexAiEvaluationMetricTimeoutsOutputReference <a name="GoogleVertexAiEvaluationMetricTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_evaluation_metric

googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiEvaluationMetricTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---



