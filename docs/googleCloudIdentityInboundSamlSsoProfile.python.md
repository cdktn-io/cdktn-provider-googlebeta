# `googleCloudIdentityInboundSamlSsoProfile` Submodule <a name="`googleCloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundSamlSsoProfile <a name="GoogleCloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleCloudIdentityInboundSamlSsoProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#idp_config GoogleCloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer"></a>

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#customer GoogleCloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#deletion_policy GoogleCloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#display_name GoogleCloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#timeouts GoogleCloudIdentityInboundSamlSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer">reset_customer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```python
def put_idp_config(
  entity_id: str,
  single_sign_on_service_uri: str,
  change_password_uri: str = None,
  logout_redirect_uri: str = None
) -> None
```

###### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.entityId"></a>

- *Type:* str

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#entity_id GoogleCloudIdentityInboundSamlSsoProfile#entity_id}

---

###### `single_sign_on_service_uri`<sup>Required</sup> <a name="single_sign_on_service_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.singleSignOnServiceUri"></a>

- *Type:* str

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri GoogleCloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

###### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.changePasswordUri"></a>

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#change_password_uri GoogleCloudIdentityInboundSamlSsoProfile#change_password_uri}

---

###### `logout_redirect_uri`<sup>Optional</sup> <a name="logout_redirect_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.logoutRedirectUri"></a>

- *Type:* str

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#logout_redirect_uri GoogleCloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}.

---

##### `reset_customer` <a name="reset_customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```python
def reset_customer() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudIdentityInboundSamlSsoProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">inbound_saml_sso_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig">sp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput">customer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer">customer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```python
idp_config: GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `inbound_saml_sso_profile_id`<sup>Required</sup> <a name="inbound_saml_sso_profile_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```python
inbound_saml_sso_profile_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```python
sp_config: GoogleCloudIdentityInboundSamlSsoProfileSpConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```python
timeouts: GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `customer_input`<sup>Optional</sup> <a name="customer_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```python
customer_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```python
idp_config_input: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCloudIdentityInboundSamlSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer"></a>

```python
customer: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundSamlSsoProfileConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleCloudIdentityInboundSamlSsoProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```python
idp_config: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#idp_config GoogleCloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```python
customer: str
```

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#customer GoogleCloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#deletion_policy GoogleCloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#display_name GoogleCloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudIdentityInboundSamlSsoProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#timeouts GoogleCloudIdentityInboundSamlSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig(
  entity_id: str,
  single_sign_on_service_uri: str,
  change_password_uri: str = None,
  logout_redirect_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">entity_id</a></code> | <code>str</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">single_sign_on_service_uri</a></code> | <code>str</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">logout_redirect_uri</a></code> | <code>str</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#entity_id GoogleCloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `single_sign_on_service_uri`<sup>Required</sup> <a name="single_sign_on_service_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```python
single_sign_on_service_uri: str
```

- *Type:* str

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri GoogleCloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#change_password_uri GoogleCloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `logout_redirect_uri`<sup>Optional</sup> <a name="logout_redirect_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```python
logout_redirect_uri: str
```

- *Type:* str

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#logout_redirect_uri GoogleCloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

### GoogleCloudIdentityInboundSamlSsoProfileSpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig()
```


### GoogleCloudIdentityInboundSamlSsoProfileTimeouts <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">reset_change_password_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">reset_logout_redirect_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_password_uri` <a name="reset_change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```python
def reset_change_password_uri() -> None
```

##### `reset_logout_redirect_uri` <a name="reset_logout_redirect_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```python
def reset_logout_redirect_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">change_password_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">logout_redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">single_sign_on_service_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">logout_redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">single_sign_on_service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_password_uri_input`<sup>Optional</sup> <a name="change_password_uri_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```python
change_password_uri_input: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `logout_redirect_uri_input`<sup>Optional</sup> <a name="logout_redirect_uri_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```python
logout_redirect_uri_input: str
```

- *Type:* str

---

##### `single_sign_on_service_uri_input`<sup>Optional</sup> <a name="single_sign_on_service_uri_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```python
single_sign_on_service_uri_input: str
```

- *Type:* str

---

##### `change_password_uri`<sup>Required</sup> <a name="change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `logout_redirect_uri`<sup>Required</sup> <a name="logout_redirect_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```python
logout_redirect_uri: str
```

- *Type:* str

---

##### `single_sign_on_service_uri`<sup>Required</sup> <a name="single_sign_on_service_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```python
single_sign_on_service_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigList <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">assertion_consumer_service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assertion_consumer_service_uri`<sup>Required</sup> <a name="assertion_consumer_service_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```python
assertion_consumer_service_uri: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudIdentityInboundSamlSsoProfileSpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_saml_sso_profile

googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudIdentityInboundSamlSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---



