# `googleAgentIdentityAuthProvider` Submodule <a name="`googleAgentIdentityAuthProvider` Submodule" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentIdentityAuthProvider <a name="GoogleAgentIdentityAuthProvider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider google_agent_identity_auth_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_provider_id: str,
  auth_provider_type_params: GoogleAgentIdentityAuthProviderAuthProviderTypeParams,
  location: str,
  allowed_scopes: typing.List[str] = None,
  blocked_scopes: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleAgentIdentityAuthProviderTimeouts = None,
  workload_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.authProviderId">auth_provider_id</a></code> | <code>str</code> | The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.authProviderTypeParams">auth_provider_type_params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a></code> | auth_provider_type_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.allowedScopes">allowed_scopes</a></code> | <code>typing.List[str]</code> | List of scopes that are allowed to be requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.blockedScopes">blocked_scopes</a></code> | <code>typing.List[str]</code> | List of scopes that are blocked from being requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the resource. Must be less than 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#id GoogleAgentIdentityAuthProvider#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#project GoogleAgentIdentityAuthProvider#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.workloadIds">workload_ids</a></code> | <code>typing.List[str]</code> | Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_id`<sup>Required</sup> <a name="auth_provider_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.authProviderId"></a>

- *Type:* str

The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name.

This value should be 1-63 characters, and valid characters
are /a-z-/. The first character must be a lowercase letter, and the
last character must be a lowercase letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#auth_provider_id GoogleAgentIdentityAuthProvider#auth_provider_id}

---

##### `auth_provider_type_params`<sup>Required</sup> <a name="auth_provider_type_params" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.authProviderTypeParams"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

auth_provider_type_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#auth_provider_type_params GoogleAgentIdentityAuthProvider#auth_provider_type_params}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#location GoogleAgentIdentityAuthProvider#location}

---

##### `allowed_scopes`<sup>Optional</sup> <a name="allowed_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.allowedScopes"></a>

- *Type:* typing.List[str]

List of scopes that are allowed to be requested for this auth_provider.

If this list is non-empty, only scopes within this list may be requested.
If this list is empty, all scopes may be requested.
Scopes appearing in 'blocked_scopes' are disallowed even if they appear in
'allowed_scopes'.
The number of allowed scopes is limited to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#allowed_scopes GoogleAgentIdentityAuthProvider#allowed_scopes}

---

##### `blocked_scopes`<sup>Optional</sup> <a name="blocked_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.blockedScopes"></a>

- *Type:* typing.List[str]

List of scopes that are blocked from being requested for this auth_provider.

If a scope appears in this list, it will not be requested,
even if it also appears in 'allowed_scopes'. 'blocked_scopes' takes
precedence over 'allowed_scopes'. The number of blocked scopes is limited
to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#blocked_scopes GoogleAgentIdentityAuthProvider#blocked_scopes}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#deletion_policy GoogleAgentIdentityAuthProvider#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.description"></a>

- *Type:* str

Description of the resource. Must be less than 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#description GoogleAgentIdentityAuthProvider#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#id GoogleAgentIdentityAuthProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#labels GoogleAgentIdentityAuthProvider#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#project GoogleAgentIdentityAuthProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#timeouts GoogleAgentIdentityAuthProvider#timeouts}

---

##### `workload_ids`<sup>Optional</sup> <a name="workload_ids" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.Initializer.parameter.workloadIds"></a>

- *Type:* typing.List[str]

Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#workload_ids GoogleAgentIdentityAuthProvider#workload_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams">put_auth_provider_type_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetAllowedScopes">reset_allowed_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetBlockedScopes">reset_blocked_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetWorkloadIds">reset_workload_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_provider_type_params` <a name="put_auth_provider_type_params" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams"></a>

```python
def put_auth_provider_type_params(
  api_key: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey = None,
  three_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth = None,
  two_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#api_key GoogleAgentIdentityAuthProvider#api_key}

---

###### `three_legged_oauth`<sup>Optional</sup> <a name="three_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams.parameter.threeLeggedOauth"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

three_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#three_legged_oauth GoogleAgentIdentityAuthProvider#three_legged_oauth}

---

###### `two_legged_oauth`<sup>Optional</sup> <a name="two_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putAuthProviderTypeParams.parameter.twoLeggedOauth"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

two_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#two_legged_oauth GoogleAgentIdentityAuthProvider#two_legged_oauth}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#create GoogleAgentIdentityAuthProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#delete GoogleAgentIdentityAuthProvider#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#update GoogleAgentIdentityAuthProvider#update}.

---

##### `reset_allowed_scopes` <a name="reset_allowed_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetAllowedScopes"></a>

```python
def reset_allowed_scopes() -> None
```

##### `reset_blocked_scopes` <a name="reset_blocked_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetBlockedScopes"></a>

```python
def reset_blocked_scopes() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workload_ids` <a name="reset_workload_ids" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.resetWorkloadIds"></a>

```python
def reset_workload_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleAgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleAgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAgentIdentityAuthProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAgentIdentityAuthProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentIdentityAuthProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParams">auth_provider_type_params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deleted">deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference">GoogleAgentIdentityAuthProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopesInput">allowed_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderIdInput">auth_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParamsInput">auth_provider_type_params_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopesInput">blocked_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIdsInput">workload_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopes">allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderId">auth_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopes">blocked_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIds">workload_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_type_params`<sup>Required</sup> <a name="auth_provider_type_params" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParams"></a>

```python
auth_provider_type_params: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeouts"></a>

```python
timeouts: GoogleAgentIdentityAuthProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference">GoogleAgentIdentityAuthProviderTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allowed_scopes_input`<sup>Optional</sup> <a name="allowed_scopes_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopesInput"></a>

```python
allowed_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_provider_id_input`<sup>Optional</sup> <a name="auth_provider_id_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderIdInput"></a>

```python
auth_provider_id_input: str
```

- *Type:* str

---

##### `auth_provider_type_params_input`<sup>Optional</sup> <a name="auth_provider_type_params_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderTypeParamsInput"></a>

```python
auth_provider_type_params_input: GoogleAgentIdentityAuthProviderAuthProviderTypeParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

---

##### `blocked_scopes_input`<sup>Optional</sup> <a name="blocked_scopes_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopesInput"></a>

```python
blocked_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleAgentIdentityAuthProviderTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

---

##### `workload_ids_input`<sup>Optional</sup> <a name="workload_ids_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIdsInput"></a>

```python
workload_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_scopes`<sup>Required</sup> <a name="allowed_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.allowedScopes"></a>

```python
allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_provider_id`<sup>Required</sup> <a name="auth_provider_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.authProviderId"></a>

```python
auth_provider_id: str
```

- *Type:* str

---

##### `blocked_scopes`<sup>Required</sup> <a name="blocked_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.blockedScopes"></a>

```python
blocked_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_ids`<sup>Required</sup> <a name="workload_ids" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.workloadIds"></a>

```python
workload_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentIdentityAuthProviderAuthProviderTypeParams <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParams" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams(
  api_key: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey = None,
  three_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth = None,
  two_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | api_key block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth">three_legged_oauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | three_legged_oauth block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth">two_legged_oauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | two_legged_oauth block. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.apiKey"></a>

```python
api_key: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#api_key GoogleAgentIdentityAuthProvider#api_key}

---

##### `three_legged_oauth`<sup>Optional</sup> <a name="three_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.threeLeggedOauth"></a>

```python
three_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

three_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#three_legged_oauth GoogleAgentIdentityAuthProvider#three_legged_oauth}

---

##### `two_legged_oauth`<sup>Optional</sup> <a name="two_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams.property.twoLeggedOauth"></a>

```python
two_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

two_legged_oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#two_legged_oauth GoogleAgentIdentityAuthProvider#two_legged_oauth}

---

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey(
  api_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey">api_key</a></code> | <code>str</code> | Input only. The API key for this auth_provider. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Input only. The API key for this auth_provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#api_key GoogleAgentIdentityAuthProvider#api_key}

---

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider()
```


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth(
  authorization_url: str = None,
  client_id: str = None,
  client_secret: str = None,
  client_secret_wo: str = None,
  client_secret_wo_version: str = None,
  default_continue_uri: str = None,
  enable_pkce: bool | IResolvable = None,
  token_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId">client_id</a></code> | <code>str</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret">client_secret</a></code> | <code>str</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>str</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri">default_continue_uri</a></code> | <code>str</code> | The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce">enable_pkce</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl">token_url</a></code> | <code>str</code> | The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token". |

---

##### `authorization_url`<sup>Optional</sup> <a name="authorization_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#authorization_url GoogleAgentIdentityAuthProvider#authorization_url}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_id GoogleAgentIdentityAuthProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret GoogleAgentIdentityAuthProvider#client_secret}

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo GoogleAgentIdentityAuthProvider#client_secret_wo}

---

##### `client_secret_wo_version`<sup>Optional</sup> <a name="client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: str
```

- *Type:* str

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo_version GoogleAgentIdentityAuthProvider#client_secret_wo_version}

---

##### `default_continue_uri`<sup>Optional</sup> <a name="default_continue_uri" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.defaultContinueUri"></a>

```python
default_continue_uri: str
```

- *Type:* str

The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#default_continue_uri GoogleAgentIdentityAuthProvider#default_continue_uri}

---

##### `enable_pkce`<sup>Optional</sup> <a name="enable_pkce" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.enablePkce"></a>

```python
enable_pkce: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#enable_pkce GoogleAgentIdentityAuthProvider#enable_pkce}

---

##### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#token_url GoogleAgentIdentityAuthProvider#token_url}

---

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth(
  client_id: str = None,
  client_secret: str = None,
  client_secret_wo: str = None,
  client_secret_wo_version: str = None,
  token_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId">client_id</a></code> | <code>str</code> | The client ID of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret">client_secret</a></code> | <code>str</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Input only. The client secret of the OAuth client. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>str</code> | Triggers update of 'client_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl">token_url</a></code> | <code>str</code> | The token endpoint of the OAuth client. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_id GoogleAgentIdentityAuthProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret GoogleAgentIdentityAuthProvider#client_secret}

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo GoogleAgentIdentityAuthProvider#client_secret_wo}

---

##### `client_secret_wo_version`<sup>Optional</sup> <a name="client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: str
```

- *Type:* str

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo_version GoogleAgentIdentityAuthProvider#client_secret_wo_version}

---

##### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

The token endpoint of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#token_url GoogleAgentIdentityAuthProvider#token_url}

---

### GoogleAgentIdentityAuthProviderConfig <a name="GoogleAgentIdentityAuthProviderConfig" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_provider_id: str,
  auth_provider_type_params: GoogleAgentIdentityAuthProviderAuthProviderTypeParams,
  location: str,
  allowed_scopes: typing.List[str] = None,
  blocked_scopes: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleAgentIdentityAuthProviderTimeouts = None,
  workload_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderId">auth_provider_id</a></code> | <code>str</code> | The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderTypeParams">auth_provider_type_params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a></code> | auth_provider_type_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.allowedScopes">allowed_scopes</a></code> | <code>typing.List[str]</code> | List of scopes that are allowed to be requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.blockedScopes">blocked_scopes</a></code> | <code>typing.List[str]</code> | List of scopes that are blocked from being requested for this auth_provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.description">description</a></code> | <code>str</code> | Description of the resource. Must be less than 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#id GoogleAgentIdentityAuthProvider#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#project GoogleAgentIdentityAuthProvider#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.workloadIds">workload_ids</a></code> | <code>typing.List[str]</code> | Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_id`<sup>Required</sup> <a name="auth_provider_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderId"></a>

```python
auth_provider_id: str
```

- *Type:* str

The ID to use for the AuthProvider, which will become the final segment of the AuthProvider's resource name.

This value should be 1-63 characters, and valid characters
are /a-z-/. The first character must be a lowercase letter, and the
last character must be a lowercase letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#auth_provider_id GoogleAgentIdentityAuthProvider#auth_provider_id}

---

##### `auth_provider_type_params`<sup>Required</sup> <a name="auth_provider_type_params" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.authProviderTypeParams"></a>

```python
auth_provider_type_params: GoogleAgentIdentityAuthProviderAuthProviderTypeParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

auth_provider_type_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#auth_provider_type_params GoogleAgentIdentityAuthProvider#auth_provider_type_params}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#location GoogleAgentIdentityAuthProvider#location}

---

##### `allowed_scopes`<sup>Optional</sup> <a name="allowed_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.allowedScopes"></a>

```python
allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

List of scopes that are allowed to be requested for this auth_provider.

If this list is non-empty, only scopes within this list may be requested.
If this list is empty, all scopes may be requested.
Scopes appearing in 'blocked_scopes' are disallowed even if they appear in
'allowed_scopes'.
The number of allowed scopes is limited to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#allowed_scopes GoogleAgentIdentityAuthProvider#allowed_scopes}

---

##### `blocked_scopes`<sup>Optional</sup> <a name="blocked_scopes" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.blockedScopes"></a>

```python
blocked_scopes: typing.List[str]
```

- *Type:* typing.List[str]

List of scopes that are blocked from being requested for this auth_provider.

If a scope appears in this list, it will not be requested,
even if it also appears in 'allowed_scopes'. 'blocked_scopes' takes
precedence over 'allowed_scopes'. The number of blocked scopes is limited
to 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#blocked_scopes GoogleAgentIdentityAuthProvider#blocked_scopes}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#deletion_policy GoogleAgentIdentityAuthProvider#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the resource. Must be less than 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#description GoogleAgentIdentityAuthProvider#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#id GoogleAgentIdentityAuthProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#labels GoogleAgentIdentityAuthProvider#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#project GoogleAgentIdentityAuthProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.timeouts"></a>

```python
timeouts: GoogleAgentIdentityAuthProviderTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#timeouts GoogleAgentIdentityAuthProvider#timeouts}

---

##### `workload_ids`<sup>Optional</sup> <a name="workload_ids" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderConfig.property.workloadIds"></a>

```python
workload_ids: typing.List[str]
```

- *Type:* typing.List[str]

Input only. Represents the workload identity in IAM 'principal://' format of the agent(s) that will use this AuthProvider. Example: 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#workload_ids GoogleAgentIdentityAuthProvider#workload_ids}

---

### GoogleAgentIdentityAuthProviderTimeouts <a name="GoogleAgentIdentityAuthProviderTimeouts" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#create GoogleAgentIdentityAuthProvider#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#delete GoogleAgentIdentityAuthProvider#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#update GoogleAgentIdentityAuthProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#create GoogleAgentIdentityAuthProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#delete GoogleAgentIdentityAuthProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#update GoogleAgentIdentityAuthProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth">put_three_legged_oauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth">put_two_legged_oauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth">reset_three_legged_oauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth">reset_two_legged_oauth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey"></a>

```python
def put_api_key(
  api_key: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putApiKey.parameter.apiKey"></a>

- *Type:* str

Input only. The API key for this auth_provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#api_key GoogleAgentIdentityAuthProvider#api_key}

---

##### `put_three_legged_oauth` <a name="put_three_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth"></a>

```python
def put_three_legged_oauth(
  authorization_url: str = None,
  client_id: str = None,
  client_secret: str = None,
  client_secret_wo: str = None,
  client_secret_wo_version: str = None,
  default_continue_uri: str = None,
  enable_pkce: bool | IResolvable = None,
  token_url: str = None
) -> None
```

###### `authorization_url`<sup>Optional</sup> <a name="authorization_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.authorizationUrl"></a>

- *Type:* str

The authorization endpoint to send users to for consenting to delegate to the agent. eg. "https://auth.atlassian.com/authorize".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#authorization_url GoogleAgentIdentityAuthProvider#authorization_url}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.clientId"></a>

- *Type:* str

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_id GoogleAgentIdentityAuthProvider#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.clientSecret"></a>

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret GoogleAgentIdentityAuthProvider#client_secret}

---

###### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.clientSecretWo"></a>

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo GoogleAgentIdentityAuthProvider#client_secret_wo}

---

###### `client_secret_wo_version`<sup>Optional</sup> <a name="client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.clientSecretWoVersion"></a>

- *Type:* str

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo_version GoogleAgentIdentityAuthProvider#client_secret_wo_version}

---

###### `default_continue_uri`<sup>Optional</sup> <a name="default_continue_uri" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.defaultContinueUri"></a>

- *Type:* str

The default continue URI for 3LO flow and it will be used when no continue URI is provided in the RetrieveCredentials request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#default_continue_uri GoogleAgentIdentityAuthProvider#default_continue_uri}

---

###### `enable_pkce`<sup>Optional</sup> <a name="enable_pkce" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.enablePkce"></a>

- *Type:* bool | cdktn.IResolvable

Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent authorization code interception attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#enable_pkce GoogleAgentIdentityAuthProvider#enable_pkce}

---

###### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putThreeLeggedOauth.parameter.tokenUrl"></a>

- *Type:* str

The token endpoint for requesting tokens on behalf of an end user. eg. "https://auth.atlassian.com/oauth/token".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#token_url GoogleAgentIdentityAuthProvider#token_url}

---

##### `put_two_legged_oauth` <a name="put_two_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth"></a>

```python
def put_two_legged_oauth(
  client_id: str = None,
  client_secret: str = None,
  client_secret_wo: str = None,
  client_secret_wo_version: str = None,
  token_url: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.clientId"></a>

- *Type:* str

The client ID of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_id GoogleAgentIdentityAuthProvider#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.clientSecret"></a>

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret GoogleAgentIdentityAuthProvider#client_secret}

---

###### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.clientSecretWo"></a>

- *Type:* str

Input only. The client secret of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo GoogleAgentIdentityAuthProvider#client_secret_wo}

---

###### `client_secret_wo_version`<sup>Optional</sup> <a name="client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.clientSecretWoVersion"></a>

- *Type:* str

Triggers update of 'client_secret_wo' write-only.

Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#client_secret_wo_version GoogleAgentIdentityAuthProvider#client_secret_wo_version}

---

###### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.putTwoLeggedOauth.parameter.tokenUrl"></a>

- *Type:* str

The token endpoint of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_identity_auth_provider#token_url GoogleAgentIdentityAuthProvider#token_url}

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_three_legged_oauth` <a name="reset_three_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetThreeLeggedOauth"></a>

```python
def reset_three_legged_oauth() -> None
```

##### `reset_two_legged_oauth` <a name="reset_two_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.resetTwoLeggedOauth"></a>

```python
def reset_two_legged_oauth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider">ge_auth_provider</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth">three_legged_oauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth">two_legged_oauth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput">api_key_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput">three_legged_oauth_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput">two_legged_oauth_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKey"></a>

```python
api_key: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference</a>

---

##### `ge_auth_provider`<sup>Required</sup> <a name="ge_auth_provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.geAuthProvider"></a>

```python
ge_auth_provider: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList</a>

---

##### `three_legged_oauth`<sup>Required</sup> <a name="three_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauth"></a>

```python
three_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference</a>

---

##### `two_legged_oauth`<sup>Required</sup> <a name="two_legged_oauth" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauth"></a>

```python
two_legged_oauth: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.apiKeyInput"></a>

```python
api_key_input: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsApiKey</a>

---

##### `three_legged_oauth_input`<sup>Optional</sup> <a name="three_legged_oauth_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.threeLeggedOauthInput"></a>

```python
three_legged_oauth_input: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---

##### `two_legged_oauth_input`<sup>Optional</sup> <a name="two_legged_oauth_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.twoLeggedOauthInput"></a>

```python
two_legged_oauth_input: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentIdentityAuthProviderAuthProviderTypeParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParams">GoogleAgentIdentityAuthProviderAuthProviderTypeParams</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl">reset_authorization_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion">reset_client_secret_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri">reset_default_continue_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce">reset_enable_pkce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl">reset_token_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_url` <a name="reset_authorization_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetAuthorizationUrl"></a>

```python
def reset_authorization_url() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```

##### `reset_client_secret_wo_version` <a name="reset_client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```python
def reset_client_secret_wo_version() -> None
```

##### `reset_default_continue_uri` <a name="reset_default_continue_uri" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetDefaultContinueUri"></a>

```python
def reset_default_continue_uri() -> None
```

##### `reset_enable_pkce` <a name="reset_enable_pkce" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetEnablePkce"></a>

```python
def reset_enable_pkce() -> None
```

##### `reset_token_url` <a name="reset_token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.resetTokenUrl"></a>

```python
def reset_token_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput">authorization_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput">client_secret_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput">default_continue_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput">enable_pkce_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri">default_continue_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce">enable_pkce</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `authorization_url_input`<sup>Optional</sup> <a name="authorization_url_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrlInput"></a>

```python
authorization_url_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_secret_wo_version_input`<sup>Optional</sup> <a name="client_secret_wo_version_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```python
client_secret_wo_version_input: str
```

- *Type:* str

---

##### `default_continue_uri_input`<sup>Optional</sup> <a name="default_continue_uri_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUriInput"></a>

```python
default_continue_uri_input: str
```

- *Type:* str

---

##### `enable_pkce_input`<sup>Optional</sup> <a name="enable_pkce_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkceInput"></a>

```python
enable_pkce_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `client_secret_wo_version`<sup>Required</sup> <a name="client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: str
```

- *Type:* str

---

##### `default_continue_uri`<sup>Required</sup> <a name="default_continue_uri" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.defaultContinueUri"></a>

```python
default_continue_uri: str
```

- *Type:* str

---

##### `enable_pkce`<sup>Required</sup> <a name="enable_pkce" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.enablePkce"></a>

```python
enable_pkce: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth</a>

---


### GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference <a name="GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion">reset_client_secret_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl">reset_token_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```

##### `reset_client_secret_wo_version` <a name="reset_client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetClientSecretWoVersion"></a>

```python
def reset_client_secret_wo_version() -> None
```

##### `reset_token_url` <a name="reset_token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.resetTokenUrl"></a>

```python
def reset_token_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput">client_secret_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_secret_wo_version_input`<sup>Optional</sup> <a name="client_secret_wo_version_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersionInput"></a>

```python
client_secret_wo_version_input: str
```

- *Type:* str

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `client_secret_wo_version`<sup>Required</sup> <a name="client_secret_wo_version" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth">GoogleAgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth</a>

---


### GoogleAgentIdentityAuthProviderTimeoutsOutputReference <a name="GoogleAgentIdentityAuthProviderTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_identity_auth_provider

googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleAgentIdentityAuthProviderTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProvider.GoogleAgentIdentityAuthProviderTimeouts">GoogleAgentIdentityAuthProviderTimeouts</a>

---



