# `googleVertexAiOnlineEvaluator` Submodule <a name="`googleVertexAiOnlineEvaluator` Submodule" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiOnlineEvaluator <a name="GoogleVertexAiOnlineEvaluator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator google_vertex_ai_online_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_resource: str,
  cloud_observability: GoogleVertexAiOnlineEvaluatorCloudObservability,
  config: GoogleVertexAiOnlineEvaluatorConfigA,
  metric_sources: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorMetricSources],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiOnlineEvaluatorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.agentResource">agent_resource</a></code> | <code>str</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.cloudObservability">cloud_observability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.metricSources">metric_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]</code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_resource`<sup>Required</sup> <a name="agent_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.agentResource"></a>

- *Type:* str

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#agent_resource GoogleVertexAiOnlineEvaluator#agent_resource}

---

##### `cloud_observability`<sup>Required</sup> <a name="cloud_observability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.cloudObservability"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#cloud_observability GoogleVertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#config GoogleVertexAiOnlineEvaluator#config}

---

##### `metric_sources`<sup>Required</sup> <a name="metric_sources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.metricSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_sources GoogleVertexAiOnlineEvaluator#metric_sources}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#deletion_policy GoogleVertexAiOnlineEvaluator#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#display_name GoogleVertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.region"></a>

- *Type:* str

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#region GoogleVertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#timeouts GoogleVertexAiOnlineEvaluator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability">put_cloud_observability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources">put_metric_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_observability` <a name="put_cloud_observability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability"></a>

```python
def put_cloud_observability(
  open_telemetry: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry,
  log_view: str = None,
  session_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope = None,
  trace_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope = None,
  trace_view: str = None
) -> None
```

###### `open_telemetry`<sup>Required</sup> <a name="open_telemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability.parameter.openTelemetry"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#open_telemetry GoogleVertexAiOnlineEvaluator#open_telemetry}

---

###### `log_view`<sup>Optional</sup> <a name="log_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability.parameter.logView"></a>

- *Type:* str

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#log_view GoogleVertexAiOnlineEvaluator#log_view}

---

###### `session_scope`<sup>Optional</sup> <a name="session_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability.parameter.sessionScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#session_scope GoogleVertexAiOnlineEvaluator#session_scope}

---

###### `trace_scope`<sup>Optional</sup> <a name="trace_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability.parameter.traceScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_scope GoogleVertexAiOnlineEvaluator#trace_scope}

---

###### `trace_view`<sup>Optional</sup> <a name="trace_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putCloudObservability.parameter.traceView"></a>

- *Type:* str

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_view GoogleVertexAiOnlineEvaluator#trace_view}

---

##### `put_config` <a name="put_config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig"></a>

```python
def put_config(
  max_evaluated_samples_per_run: str = None,
  random_sampling: GoogleVertexAiOnlineEvaluatorConfigRandomSampling = None
) -> None
```

###### `max_evaluated_samples_per_run`<sup>Optional</sup> <a name="max_evaluated_samples_per_run" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig.parameter.maxEvaluatedSamplesPerRun"></a>

- *Type:* str

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#max_evaluated_samples_per_run GoogleVertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

###### `random_sampling`<sup>Optional</sup> <a name="random_sampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putConfig.parameter.randomSampling"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#random_sampling GoogleVertexAiOnlineEvaluator#random_sampling}

---

##### `put_metric_sources` <a name="put_metric_sources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources"></a>

```python
def put_metric_sources(
  value: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorMetricSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putMetricSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiOnlineEvaluator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiOnlineEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiOnlineEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservability">cloud_observability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference">GoogleVertexAiOnlineEvaluatorConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSources">metric_sources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList">GoogleVertexAiOnlineEvaluatorMetricSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.stateDetails">state_details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList">GoogleVertexAiOnlineEvaluatorStateDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference">GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResourceInput">agent_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservabilityInput">cloud_observability_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.configInput">config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSourcesInput">metric_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResource">agent_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_observability`<sup>Required</sup> <a name="cloud_observability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservability"></a>

```python
cloud_observability: GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.config"></a>

```python
config: GoogleVertexAiOnlineEvaluatorConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference">GoogleVertexAiOnlineEvaluatorConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `metric_sources`<sup>Required</sup> <a name="metric_sources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSources"></a>

```python
metric_sources: GoogleVertexAiOnlineEvaluatorMetricSourcesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList">GoogleVertexAiOnlineEvaluatorMetricSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.stateDetails"></a>

```python
state_details: GoogleVertexAiOnlineEvaluatorStateDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList">GoogleVertexAiOnlineEvaluatorStateDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeouts"></a>

```python
timeouts: GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference">GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `agent_resource_input`<sup>Optional</sup> <a name="agent_resource_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResourceInput"></a>

```python
agent_resource_input: str
```

- *Type:* str

---

##### `cloud_observability_input`<sup>Optional</sup> <a name="cloud_observability_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.cloudObservabilityInput"></a>

```python
cloud_observability_input: GoogleVertexAiOnlineEvaluatorCloudObservability
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.configInput"></a>

```python
config_input: GoogleVertexAiOnlineEvaluatorConfigA
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_sources_input`<sup>Optional</sup> <a name="metric_sources_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.metricSourcesInput"></a>

```python
metric_sources_input: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorMetricSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiOnlineEvaluatorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---

##### `agent_resource`<sup>Required</sup> <a name="agent_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.agentResource"></a>

```python
agent_resource: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiOnlineEvaluatorCloudObservability <a name="GoogleVertexAiOnlineEvaluatorCloudObservability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability(
  open_telemetry: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry,
  log_view: str = None,
  session_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope = None,
  trace_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope = None,
  trace_view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.openTelemetry">open_telemetry</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | open_telemetry block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.logView">log_view</a></code> | <code>str</code> | Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.sessionScope">session_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | session_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceScope">trace_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | trace_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceView">trace_view</a></code> | <code>str</code> | Optional trace view that will be used to query traces. |

---

##### `open_telemetry`<sup>Required</sup> <a name="open_telemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.openTelemetry"></a>

```python
open_telemetry: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#open_telemetry GoogleVertexAiOnlineEvaluator#open_telemetry}

---

##### `log_view`<sup>Optional</sup> <a name="log_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.logView"></a>

```python
log_view: str
```

- *Type:* str

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#log_view GoogleVertexAiOnlineEvaluator#log_view}

---

##### `session_scope`<sup>Optional</sup> <a name="session_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.sessionScope"></a>

```python
session_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#session_scope GoogleVertexAiOnlineEvaluator#session_scope}

---

##### `trace_scope`<sup>Optional</sup> <a name="trace_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceScope"></a>

```python
trace_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_scope GoogleVertexAiOnlineEvaluator#trace_scope}

---

##### `trace_view`<sup>Optional</sup> <a name="trace_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability.property.traceView"></a>

```python
trace_view: str
```

- *Type:* str

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#trace_view GoogleVertexAiOnlineEvaluator#trace_view}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry(
  semconv_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion">semconv_version</a></code> | <code>str</code> | Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer. |

---

##### `semconv_version`<sup>Required</sup> <a name="semconv_version" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion"></a>

```python
semconv_version: str
```

- *Type:* str

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#semconv_version GoogleVertexAiOnlineEvaluator#semconv_version}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope(
  filter: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter] = None,
  inactivity_trigger: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger">inactivity_trigger</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | inactivity_trigger block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter"></a>

```python
filter: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

##### `inactivity_trigger`<sup>Optional</sup> <a name="inactivity_trigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger"></a>

```python
inactivity_trigger: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#inactivity_trigger GoogleVertexAiOnlineEvaluator#inactivity_trigger}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter(
  duration: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration = None,
  model_call_errors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors = None,
  model_calls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls = None,
  tool_call_errors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors = None,
  tool_calls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls = None,
  total_token_usage: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage = None,
  user_turns: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors">model_call_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | model_call_errors block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls">model_calls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | model_calls block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors">tool_call_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | tool_call_errors block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls">tool_calls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | tool_calls block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns">user_turns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | user_turns block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration"></a>

```python
duration: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}

---

##### `model_call_errors`<sup>Optional</sup> <a name="model_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors"></a>

```python
model_call_errors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

model_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#model_call_errors GoogleVertexAiOnlineEvaluator#model_call_errors}

---

##### `model_calls`<sup>Optional</sup> <a name="model_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls"></a>

```python
model_calls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

model_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#model_calls GoogleVertexAiOnlineEvaluator#model_calls}

---

##### `tool_call_errors`<sup>Optional</sup> <a name="tool_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors"></a>

```python
tool_call_errors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

tool_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#tool_call_errors GoogleVertexAiOnlineEvaluator#tool_call_errors}

---

##### `tool_calls`<sup>Optional</sup> <a name="tool_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls"></a>

```python
tool_calls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

tool_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#tool_calls GoogleVertexAiOnlineEvaluator#tool_calls}

---

##### `total_token_usage`<sup>Optional</sup> <a name="total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage"></a>

```python
total_token_usage: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}

---

##### `user_turns`<sup>Optional</sup> <a name="user_turns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns"></a>

```python
user_turns: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

user_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#user_turns GoogleVertexAiOnlineEvaluator#user_turns}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger(
  threshold: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold">threshold</a></code> | <code>str</code> | The amount of time that must pass with no new traces before a session is considered ready for evaluation. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#threshold GoogleVertexAiOnlineEvaluator#threshold}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope(
  filter: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter"></a>

```python
filter: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter(
  duration: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration = None,
  total_token_usage: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration"></a>

```python
duration: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}

---

##### `total_token_usage`<sup>Optional</sup> <a name="total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage"></a>

```python
total_token_usage: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

### GoogleVertexAiOnlineEvaluatorConfig <a name="GoogleVertexAiOnlineEvaluatorConfig" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_resource: str,
  cloud_observability: GoogleVertexAiOnlineEvaluatorCloudObservability,
  config: GoogleVertexAiOnlineEvaluatorConfigA,
  metric_sources: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorMetricSources],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiOnlineEvaluatorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.agentResource">agent_resource</a></code> | <code>str</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.cloudObservability">cloud_observability</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.metricSources">metric_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]</code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.region">region</a></code> | <code>str</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_resource`<sup>Required</sup> <a name="agent_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.agentResource"></a>

```python
agent_resource: str
```

- *Type:* str

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#agent_resource GoogleVertexAiOnlineEvaluator#agent_resource}

---

##### `cloud_observability`<sup>Required</sup> <a name="cloud_observability" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.cloudObservability"></a>

```python
cloud_observability: GoogleVertexAiOnlineEvaluatorCloudObservability
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#cloud_observability GoogleVertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.config"></a>

```python
config: GoogleVertexAiOnlineEvaluatorConfigA
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#config GoogleVertexAiOnlineEvaluator#config}

---

##### `metric_sources`<sup>Required</sup> <a name="metric_sources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.metricSources"></a>

```python
metric_sources: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorMetricSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_sources GoogleVertexAiOnlineEvaluator#metric_sources}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#deletion_policy GoogleVertexAiOnlineEvaluator#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#display_name GoogleVertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#region GoogleVertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiOnlineEvaluatorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#timeouts GoogleVertexAiOnlineEvaluator#timeouts}

---

### GoogleVertexAiOnlineEvaluatorConfigA <a name="GoogleVertexAiOnlineEvaluatorConfigA" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA(
  max_evaluated_samples_per_run: str = None,
  random_sampling: GoogleVertexAiOnlineEvaluatorConfigRandomSampling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun">max_evaluated_samples_per_run</a></code> | <code>str</code> | The maximum number of evaluations to perform per run. If set to 0, the number is unbounded. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.randomSampling">random_sampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | random_sampling block. |

---

##### `max_evaluated_samples_per_run`<sup>Optional</sup> <a name="max_evaluated_samples_per_run" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun"></a>

```python
max_evaluated_samples_per_run: str
```

- *Type:* str

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#max_evaluated_samples_per_run GoogleVertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

##### `random_sampling`<sup>Optional</sup> <a name="random_sampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA.property.randomSampling"></a>

```python
random_sampling: GoogleVertexAiOnlineEvaluatorConfigRandomSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#random_sampling GoogleVertexAiOnlineEvaluator#random_sampling}

---

### GoogleVertexAiOnlineEvaluatorConfigRandomSampling <a name="GoogleVertexAiOnlineEvaluatorConfigRandomSampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling(
  percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traces to sample for evaluation. Must be an integer between 1 and 100. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#percentage GoogleVertexAiOnlineEvaluator#percentage}

---

### GoogleVertexAiOnlineEvaluatorMetricSources <a name="GoogleVertexAiOnlineEvaluatorMetricSources" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources(
  metric: str = None,
  metric_resource_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metric">metric</a></code> | <code>str</code> | Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metricResourceName">metric_resource_name</a></code> | <code>str</code> | Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metric"></a>

```python
metric: str
```

- *Type:* str

Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric GoogleVertexAiOnlineEvaluator#metric}

---

##### `metric_resource_name`<sup>Optional</sup> <a name="metric_resource_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources.property.metricResourceName"></a>

```python
metric_resource_name: str
```

- *Type:* str

Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#metric_resource_name GoogleVertexAiOnlineEvaluator#metric_resource_name}

---

### GoogleVertexAiOnlineEvaluatorStateDetails <a name="GoogleVertexAiOnlineEvaluatorStateDetails" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails()
```


### GoogleVertexAiOnlineEvaluatorTimeouts <a name="GoogleVertexAiOnlineEvaluatorTimeouts" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput">semconv_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion">semconv_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `semconv_version_input`<sup>Optional</sup> <a name="semconv_version_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput"></a>

```python
semconv_version_input: str
```

- *Type:* str

---

##### `semconv_version`<sup>Required</sup> <a name="semconv_version" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion"></a>

```python
semconv_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry">put_open_telemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope">put_session_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope">put_trace_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView">reset_log_view</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope">reset_session_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope">reset_trace_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView">reset_trace_view</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_open_telemetry` <a name="put_open_telemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry"></a>

```python
def put_open_telemetry(
  semconv_version: str
) -> None
```

###### `semconv_version`<sup>Required</sup> <a name="semconv_version" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry.parameter.semconvVersion"></a>

- *Type:* str

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#semconv_version GoogleVertexAiOnlineEvaluator#semconv_version}

---

##### `put_session_scope` <a name="put_session_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope"></a>

```python
def put_session_scope(
  filter: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter] = None,
  inactivity_trigger: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

###### `inactivity_trigger`<sup>Optional</sup> <a name="inactivity_trigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.inactivityTrigger"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#inactivity_trigger GoogleVertexAiOnlineEvaluator#inactivity_trigger}

---

##### `put_trace_scope` <a name="put_trace_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope"></a>

```python
def put_trace_scope(
  filter: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter] = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}

---

##### `reset_log_view` <a name="reset_log_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView"></a>

```python
def reset_log_view() -> None
```

##### `reset_session_scope` <a name="reset_session_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope"></a>

```python
def reset_session_scope() -> None
```

##### `reset_trace_scope` <a name="reset_trace_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope"></a>

```python
def reset_trace_scope() -> None
```

##### `reset_trace_view` <a name="reset_trace_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView"></a>

```python
def reset_trace_view() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry">open_telemetry</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope">session_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope">trace_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput">log_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput">open_telemetry_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput">session_scope_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput">trace_scope_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput">trace_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView">log_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView">trace_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `open_telemetry`<sup>Required</sup> <a name="open_telemetry" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry"></a>

```python
open_telemetry: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a>

---

##### `session_scope`<sup>Required</sup> <a name="session_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope"></a>

```python
session_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a>

---

##### `trace_scope`<sup>Required</sup> <a name="trace_scope" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope"></a>

```python
trace_scope: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a>

---

##### `log_view_input`<sup>Optional</sup> <a name="log_view_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput"></a>

```python
log_view_input: str
```

- *Type:* str

---

##### `open_telemetry_input`<sup>Optional</sup> <a name="open_telemetry_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput"></a>

```python
open_telemetry_input: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `session_scope_input`<sup>Optional</sup> <a name="session_scope_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput"></a>

```python
session_scope_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `trace_scope_input`<sup>Optional</sup> <a name="trace_scope_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput"></a>

```python
trace_scope_input: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `trace_view_input`<sup>Optional</sup> <a name="trace_view_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput"></a>

```python
trace_view_input: str
```

- *Type:* str

---

##### `log_view`<sup>Required</sup> <a name="log_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView"></a>

```python
log_view: str
```

- *Type:* str

---

##### `trace_view`<sup>Required</sup> <a name="trace_view" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView"></a>

```python
trace_view: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservability
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservability">GoogleVertexAiOnlineEvaluatorCloudObservability</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration">put_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors">put_model_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls">put_model_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors">put_tool_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls">put_tool_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage">put_total_token_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns">put_user_turns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors">reset_model_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls">reset_model_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors">reset_tool_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls">reset_tool_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage">reset_total_token_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns">reset_user_turns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duration` <a name="put_duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration"></a>

```python
def put_duration(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `put_model_call_errors` <a name="put_model_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors"></a>

```python
def put_model_call_errors(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `put_model_calls` <a name="put_model_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls"></a>

```python
def put_model_calls(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `put_tool_call_errors` <a name="put_tool_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors"></a>

```python
def put_tool_call_errors(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `put_tool_calls` <a name="put_tool_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls"></a>

```python
def put_tool_calls(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `put_total_token_usage` <a name="put_total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage"></a>

```python
def put_total_token_usage(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `put_user_turns` <a name="put_user_turns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns"></a>

```python
def put_user_turns(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_model_call_errors` <a name="reset_model_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors"></a>

```python
def reset_model_call_errors() -> None
```

##### `reset_model_calls` <a name="reset_model_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls"></a>

```python
def reset_model_calls() -> None
```

##### `reset_tool_call_errors` <a name="reset_tool_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors"></a>

```python
def reset_tool_call_errors() -> None
```

##### `reset_tool_calls` <a name="reset_tool_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls"></a>

```python
def reset_tool_calls() -> None
```

##### `reset_total_token_usage` <a name="reset_total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage"></a>

```python
def reset_total_token_usage() -> None
```

##### `reset_user_turns` <a name="reset_user_turns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns"></a>

```python
def reset_user_turns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors">model_call_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls">model_calls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors">tool_call_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls">tool_calls</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns">user_turns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput">duration_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput">model_call_errors_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput">model_calls_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput">tool_call_errors_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput">tool_calls_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput">total_token_usage_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput">user_turns_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration"></a>

```python
duration: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a>

---

##### `model_call_errors`<sup>Required</sup> <a name="model_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors"></a>

```python
model_call_errors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a>

---

##### `model_calls`<sup>Required</sup> <a name="model_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls"></a>

```python
model_calls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a>

---

##### `tool_call_errors`<sup>Required</sup> <a name="tool_call_errors" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors"></a>

```python
tool_call_errors: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a>

---

##### `tool_calls`<sup>Required</sup> <a name="tool_calls" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls"></a>

```python
tool_calls: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a>

---

##### `total_token_usage`<sup>Required</sup> <a name="total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage"></a>

```python
total_token_usage: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a>

---

##### `user_turns`<sup>Required</sup> <a name="user_turns" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns"></a>

```python
user_turns: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput"></a>

```python
duration_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `model_call_errors_input`<sup>Optional</sup> <a name="model_call_errors_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput"></a>

```python
model_call_errors_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `model_calls_input`<sup>Optional</sup> <a name="model_calls_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput"></a>

```python
model_calls_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `tool_call_errors_input`<sup>Optional</sup> <a name="tool_call_errors_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput"></a>

```python
tool_call_errors_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `tool_calls_input`<sup>Optional</sup> <a name="tool_calls_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput"></a>

```python
tool_calls_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `total_token_usage_input`<sup>Optional</sup> <a name="total_token_usage_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```python
total_token_usage_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `user_turns_input`<sup>Optional</sup> <a name="user_turns_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput"></a>

```python
user_turns_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger">put_inactivity_trigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger">reset_inactivity_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

---

##### `put_inactivity_trigger` <a name="put_inactivity_trigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger"></a>

```python
def put_inactivity_trigger(
  threshold: str
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger.parameter.threshold"></a>

- *Type:* str

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#threshold GoogleVertexAiOnlineEvaluator#threshold}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_inactivity_trigger` <a name="reset_inactivity_trigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger"></a>

```python
def reset_inactivity_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger">inactivity_trigger</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput">inactivity_trigger_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter"></a>

```python
filter: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a>

---

##### `inactivity_trigger`<sup>Required</sup> <a name="inactivity_trigger" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger"></a>

```python
inactivity_trigger: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

---

##### `inactivity_trigger_input`<sup>Optional</sup> <a name="inactivity_trigger_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput"></a>

```python
inactivity_trigger_input: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope">GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration">put_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage">put_total_token_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage">reset_total_token_usage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duration` <a name="put_duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration"></a>

```python
def put_duration(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `put_total_token_usage` <a name="put_total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage"></a>

```python
def put_total_token_usage(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}

---

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_total_token_usage` <a name="reset_total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage"></a>

```python
def reset_total_token_usage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput">duration_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput">total_token_usage_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration"></a>

```python
duration: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a>

---

##### `total_token_usage`<sup>Required</sup> <a name="total_token_usage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage"></a>

```python
total_token_usage: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput"></a>

```python
duration_input: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `total_token_usage_input`<sup>Optional</sup> <a name="total_token_usage_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```python
total_token_usage_input: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---


### GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference <a name="GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter"></a>

```python
filter: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope">GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---


### GoogleVertexAiOnlineEvaluatorConfigAOutputReference <a name="GoogleVertexAiOnlineEvaluatorConfigAOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling">put_random_sampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun">reset_max_evaluated_samples_per_run</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling">reset_random_sampling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_random_sampling` <a name="put_random_sampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling"></a>

```python
def put_random_sampling(
  percentage: typing.Union[int, float]
) -> None
```

###### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_online_evaluator#percentage GoogleVertexAiOnlineEvaluator#percentage}

---

##### `reset_max_evaluated_samples_per_run` <a name="reset_max_evaluated_samples_per_run" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun"></a>

```python
def reset_max_evaluated_samples_per_run() -> None
```

##### `reset_random_sampling` <a name="reset_random_sampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling"></a>

```python
def reset_random_sampling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling">random_sampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput">max_evaluated_samples_per_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput">random_sampling_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun">max_evaluated_samples_per_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `random_sampling`<sup>Required</sup> <a name="random_sampling" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling"></a>

```python
random_sampling: GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a>

---

##### `max_evaluated_samples_per_run_input`<sup>Optional</sup> <a name="max_evaluated_samples_per_run_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput"></a>

```python
max_evaluated_samples_per_run_input: str
```

- *Type:* str

---

##### `random_sampling_input`<sup>Optional</sup> <a name="random_sampling_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput"></a>

```python
random_sampling_input: GoogleVertexAiOnlineEvaluatorConfigRandomSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `max_evaluated_samples_per_run`<sup>Required</sup> <a name="max_evaluated_samples_per_run" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun"></a>

```python
max_evaluated_samples_per_run: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorConfigA
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigA">GoogleVertexAiOnlineEvaluatorConfigA</a>

---


### GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference <a name="GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorConfigRandomSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorConfigRandomSampling">GoogleVertexAiOnlineEvaluatorConfigRandomSampling</a>

---


### GoogleVertexAiOnlineEvaluatorMetricSourcesList <a name="GoogleVertexAiOnlineEvaluatorMetricSourcesList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiOnlineEvaluatorMetricSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>]

---


### GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference <a name="GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName">reset_metric_resource_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metric_resource_name` <a name="reset_metric_resource_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName"></a>

```python
def reset_metric_resource_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput">metric_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName">metric_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `metric_resource_name_input`<sup>Optional</sup> <a name="metric_resource_name_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput"></a>

```python
metric_resource_name_input: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_resource_name`<sup>Required</sup> <a name="metric_resource_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName"></a>

```python
metric_resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiOnlineEvaluatorMetricSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorMetricSources">GoogleVertexAiOnlineEvaluatorMetricSources</a>

---


### GoogleVertexAiOnlineEvaluatorStateDetailsList <a name="GoogleVertexAiOnlineEvaluatorStateDetailsList" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference <a name="GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails">GoogleVertexAiOnlineEvaluatorStateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiOnlineEvaluatorStateDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorStateDetails">GoogleVertexAiOnlineEvaluatorStateDetails</a>

---


### GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference <a name="GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_online_evaluator

googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiOnlineEvaluatorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiOnlineEvaluator.GoogleVertexAiOnlineEvaluatorTimeouts">GoogleVertexAiOnlineEvaluatorTimeouts</a>

---



