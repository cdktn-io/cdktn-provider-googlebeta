# `googleApigeeEnvironmentApiRevisionDeployment` Submodule <a name="`googleApigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentApiRevisionDeployment <a name="GoogleApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api: str,
  environment: str,
  org_id: str,
  revision: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  override: bool | IResolvable = None,
  sequenced_rollout: bool | IResolvable = None,
  service_account: str = None,
  timeouts: GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api">api</a></code> | <code>str</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision">revision</a></code> | <code>typing.Union[int, float]</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override">override</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout">sequenced_rollout</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api"></a>

- *Type:* str

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#api GoogleApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment"></a>

- *Type:* str

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#environment GoogleApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId"></a>

- *Type:* str

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#org_id GoogleApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision"></a>

- *Type:* typing.Union[int, float]

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#revision GoogleApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#deletion_policy GoogleApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override"></a>

- *Type:* bool | cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#override GoogleApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequenced_rollout`<sup>Optional</sup> <a name="sequenced_rollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout"></a>

- *Type:* bool | cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#sequenced_rollout GoogleApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#service_account GoogleApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#timeouts GoogleApigeeEnvironmentApiRevisionDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverride">reset_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">reset_sequenced_rollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#create GoogleApigeeEnvironmentApiRevisionDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#delete GoogleApigeeEnvironmentApiRevisionDeployment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_override` <a name="reset_override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```python
def reset_override() -> None
```

##### `reset_sequenced_rollout` <a name="reset_sequenced_rollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```python
def reset_sequenced_rollout() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeEnvironmentApiRevisionDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.basepaths">basepaths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">deploy_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.overrideInput">override_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revisionInput">revision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">sequenced_rollout_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.override">override</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">sequenced_rollout</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `basepaths`<sup>Required</sup> <a name="basepaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```python
basepaths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deploy_start_time`<sup>Required</sup> <a name="deploy_start_time" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```python
deploy_start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```python
override_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```python
revision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sequenced_rollout_input`<sup>Optional</sup> <a name="sequenced_rollout_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```python
sequenced_rollout_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```python
override: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sequenced_rollout`<sup>Required</sup> <a name="sequenced_rollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```python
sequenced_rollout: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentApiRevisionDeploymentConfig <a name="GoogleApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api: str,
  environment: str,
  org_id: str,
  revision: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  override: bool | IResolvable = None,
  sequenced_rollout: bool | IResolvable = None,
  service_account: str = None,
  timeouts: GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.api">api</a></code> | <code>str</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">environment</a></code> | <code>str</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">org_id</a></code> | <code>str</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.override">override</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">sequenced_rollout</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```python
api: str
```

- *Type:* str

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#api GoogleApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#environment GoogleApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#org_id GoogleApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#revision GoogleApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#deletion_policy GoogleApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```python
override: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#override GoogleApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequenced_rollout`<sup>Optional</sup> <a name="sequenced_rollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```python
sequenced_rollout: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#sequenced_rollout GoogleApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#service_account GoogleApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#timeouts GoogleApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#create GoogleApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#delete GoogleApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#create GoogleApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_environment_api_revision_deployment#delete GoogleApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_environment_api_revision_deployment

googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---



