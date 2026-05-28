# `googleBeyondcorpSecurityGateway` Submodule <a name="`googleBeyondcorpSecurityGateway` Submodule" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGateway <a name="GoogleBeyondcorpSecurityGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_gateway_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  hubs: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayHubs] = None,
  id: str = None,
  location: str = None,
  logging: GoogleBeyondcorpSecurityGatewayLogging = None,
  project: str = None,
  proxy_protocol_config: GoogleBeyondcorpSecurityGatewayProxyProtocolConfig = None,
  service_discovery: GoogleBeyondcorpSecurityGatewayServiceDiscovery = None,
  timeouts: GoogleBeyondcorpSecurityGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.hubs">hubs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]</code> | hubs block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.proxyProtocolConfig">proxy_protocol_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | proxy_protocol_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.serviceDiscovery">service_discovery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId"></a>

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#security_gateway_id GoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#deletion_policy GoogleBeyondcorpSecurityGateway#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#display_name GoogleBeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.hubs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#hubs GoogleBeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#location GoogleBeyondcorpSecurityGateway#location}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#logging GoogleBeyondcorpSecurityGateway#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}.

---

##### `proxy_protocol_config`<sup>Optional</sup> <a name="proxy_protocol_config" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.proxyProtocolConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

proxy_protocol_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#proxy_protocol_config GoogleBeyondcorpSecurityGateway#proxy_protocol_config}

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.serviceDiscovery"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#service_discovery GoogleBeyondcorpSecurityGateway#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#timeouts GoogleBeyondcorpSecurityGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs">put_hubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig">put_proxy_protocol_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putServiceDiscovery">put_service_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetHubs">reset_hubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProxyProtocolConfig">reset_proxy_protocol_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetServiceDiscovery">reset_service_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hubs` <a name="put_hubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs"></a>

```python
def put_hubs(
  value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayHubs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]

---

##### `put_logging` <a name="put_logging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putLogging"></a>

```python
def put_logging() -> None
```

##### `put_proxy_protocol_config` <a name="put_proxy_protocol_config" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig"></a>

```python
def put_proxy_protocol_config(
  allowed_client_headers: typing.List[str] = None,
  client_ip: bool | IResolvable = None,
  contextual_headers: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders = None,
  gateway_identity: str = None,
  metadata_headers: typing.Mapping[str] = None
) -> None
```

###### `allowed_client_headers`<sup>Optional</sup> <a name="allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.allowedClientHeaders"></a>

- *Type:* typing.List[str]

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#allowed_client_headers GoogleBeyondcorpSecurityGateway#allowed_client_headers}

---

###### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.clientIp"></a>

- *Type:* bool | cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#client_ip GoogleBeyondcorpSecurityGateway#client_ip}

---

###### `contextual_headers`<sup>Optional</sup> <a name="contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.contextualHeaders"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#contextual_headers GoogleBeyondcorpSecurityGateway#contextual_headers}

---

###### `gateway_identity`<sup>Optional</sup> <a name="gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.gatewayIdentity"></a>

- *Type:* str

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#gateway_identity GoogleBeyondcorpSecurityGateway#gateway_identity}

---

###### `metadata_headers`<sup>Optional</sup> <a name="metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.metadataHeaders"></a>

- *Type:* typing.Mapping[str]

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#metadata_headers GoogleBeyondcorpSecurityGateway#metadata_headers}

---

##### `put_service_discovery` <a name="put_service_discovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putServiceDiscovery"></a>

```python
def put_service_discovery(
  api_gateway: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway = None
) -> None
```

###### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putServiceDiscovery.parameter.apiGateway"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#api_gateway GoogleBeyondcorpSecurityGateway#api_gateway}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_hubs` <a name="reset_hubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetHubs"></a>

```python
def reset_hubs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_proxy_protocol_config` <a name="reset_proxy_protocol_config" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProxyProtocolConfig"></a>

```python
def reset_proxy_protocol_config() -> None
```

##### `reset_service_discovery` <a name="reset_service_discovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetServiceDiscovery"></a>

```python
def reset_service_discovery() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBeyondcorpSecurityGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount">delegating_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubs">hubs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList">GoogleBeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference">GoogleBeyondcorpSecurityGatewayLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig">proxy_protocol_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubsInput">hubs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfigInput">proxy_protocol_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput">security_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscoveryInput">service_discovery_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delegating_service_account`<sup>Required</sup> <a name="delegating_service_account" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```python
delegating_service_account: str
```

- *Type:* str

---

##### `external_ips`<sup>Required</sup> <a name="external_ips" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hubs`<sup>Required</sup> <a name="hubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubs"></a>

```python
hubs: GoogleBeyondcorpSecurityGatewayHubsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList">GoogleBeyondcorpSecurityGatewayHubsList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.logging"></a>

```python
logging: GoogleBeyondcorpSecurityGatewayLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference">GoogleBeyondcorpSecurityGatewayLoggingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proxy_protocol_config`<sup>Required</sup> <a name="proxy_protocol_config" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig"></a>

```python
proxy_protocol_config: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference</a>

---

##### `service_discovery`<sup>Required</sup> <a name="service_discovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscovery"></a>

```python
service_discovery: GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `hubs_input`<sup>Optional</sup> <a name="hubs_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubsInput"></a>

```python
hubs_input: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayHubs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.loggingInput"></a>

```python
logging_input: GoogleBeyondcorpSecurityGatewayLogging
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proxy_protocol_config_input`<sup>Optional</sup> <a name="proxy_protocol_config_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfigInput"></a>

```python
proxy_protocol_config_input: GoogleBeyondcorpSecurityGatewayProxyProtocolConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---

##### `security_gateway_id_input`<sup>Optional</sup> <a name="security_gateway_id_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```python
security_gateway_id_input: str
```

- *Type:* str

---

##### `service_discovery_input`<sup>Optional</sup> <a name="service_discovery_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscoveryInput"></a>

```python
service_discovery_input: GoogleBeyondcorpSecurityGatewayServiceDiscovery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleBeyondcorpSecurityGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayConfig <a name="GoogleBeyondcorpSecurityGatewayConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_gateway_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  hubs: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayHubs] = None,
  id: str = None,
  location: str = None,
  logging: GoogleBeyondcorpSecurityGatewayLogging = None,
  project: str = None,
  proxy_protocol_config: GoogleBeyondcorpSecurityGatewayProxyProtocolConfig = None,
  service_discovery: GoogleBeyondcorpSecurityGatewayServiceDiscovery = None,
  timeouts: GoogleBeyondcorpSecurityGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.hubs">hubs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]</code> | hubs block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.proxyProtocolConfig">proxy_protocol_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | proxy_protocol_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#security_gateway_id GoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#deletion_policy GoogleBeyondcorpSecurityGateway#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#display_name GoogleBeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.hubs"></a>

```python
hubs: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayHubs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#hubs GoogleBeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#location GoogleBeyondcorpSecurityGateway#location}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.logging"></a>

```python
logging: GoogleBeyondcorpSecurityGatewayLogging
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#logging GoogleBeyondcorpSecurityGateway#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}.

---

##### `proxy_protocol_config`<sup>Optional</sup> <a name="proxy_protocol_config" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.proxyProtocolConfig"></a>

```python
proxy_protocol_config: GoogleBeyondcorpSecurityGatewayProxyProtocolConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

proxy_protocol_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#proxy_protocol_config GoogleBeyondcorpSecurityGateway#proxy_protocol_config}

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.serviceDiscovery"></a>

```python
service_discovery: GoogleBeyondcorpSecurityGatewayServiceDiscovery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#service_discovery GoogleBeyondcorpSecurityGateway#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpSecurityGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#timeouts GoogleBeyondcorpSecurityGateway#timeouts}

---

### GoogleBeyondcorpSecurityGatewayHubs <a name="GoogleBeyondcorpSecurityGatewayHubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs(
  region: str,
  internet_gateway: GoogleBeyondcorpSecurityGatewayHubsInternetGateway = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#region GoogleBeyondcorpSecurityGateway#region}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | internet_gateway block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#region GoogleBeyondcorpSecurityGateway#region}.

---

##### `internet_gateway`<sup>Optional</sup> <a name="internet_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.internetGateway"></a>

```python
internet_gateway: GoogleBeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

internet_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#internet_gateway GoogleBeyondcorpSecurityGateway#internet_gateway}

---

### GoogleBeyondcorpSecurityGatewayHubsInternetGateway <a name="GoogleBeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway()
```


### GoogleBeyondcorpSecurityGatewayLogging <a name="GoogleBeyondcorpSecurityGatewayLogging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging()
```


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfig <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig(
  allowed_client_headers: typing.List[str] = None,
  client_ip: bool | IResolvable = None,
  contextual_headers: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders = None,
  gateway_identity: str = None,
  metadata_headers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.allowedClientHeaders">allowed_client_headers</a></code> | <code>typing.List[str]</code> | The configuration for the proxy. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.clientIp">client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Client IP configuration. The client IP address is included if true. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.contextualHeaders">contextual_headers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | contextual_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.gatewayIdentity">gateway_identity</a></code> | <code>str</code> | Gateway identity configuration. Possible values: ["RESOURCE_NAME"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.metadataHeaders">metadata_headers</a></code> | <code>typing.Mapping[str]</code> | Custom resource specific headers along with the values. |

---

##### `allowed_client_headers`<sup>Optional</sup> <a name="allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.allowedClientHeaders"></a>

```python
allowed_client_headers: typing.List[str]
```

- *Type:* typing.List[str]

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#allowed_client_headers GoogleBeyondcorpSecurityGateway#allowed_client_headers}

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.clientIp"></a>

```python
client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#client_ip GoogleBeyondcorpSecurityGateway#client_ip}

---

##### `contextual_headers`<sup>Optional</sup> <a name="contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.contextualHeaders"></a>

```python
contextual_headers: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#contextual_headers GoogleBeyondcorpSecurityGateway#contextual_headers}

---

##### `gateway_identity`<sup>Optional</sup> <a name="gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.gatewayIdentity"></a>

```python
gateway_identity: str
```

- *Type:* str

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#gateway_identity GoogleBeyondcorpSecurityGateway#gateway_identity}

---

##### `metadata_headers`<sup>Optional</sup> <a name="metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.metadataHeaders"></a>

```python
metadata_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#metadata_headers GoogleBeyondcorpSecurityGateway#metadata_headers}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders(
  device_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo = None,
  group_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo = None,
  output_type: str = None,
  user_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.deviceInfo">device_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | device_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.groupInfo">group_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | group_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.outputType">output_type</a></code> | <code>str</code> | Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.userInfo">user_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | user_info block. |

---

##### `device_info`<sup>Optional</sup> <a name="device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.deviceInfo"></a>

```python
device_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#device_info GoogleBeyondcorpSecurityGateway#device_info}

---

##### `group_info`<sup>Optional</sup> <a name="group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.groupInfo"></a>

```python
group_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#group_info GoogleBeyondcorpSecurityGateway#group_info}

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

##### `user_info`<sup>Optional</sup> <a name="user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.userInfo"></a>

```python
user_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#user_info GoogleBeyondcorpSecurityGateway#user_info}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo(
  output_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.property.outputType">output_type</a></code> | <code>str</code> | The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

### GoogleBeyondcorpSecurityGatewayServiceDiscovery <a name="GoogleBeyondcorpSecurityGatewayServiceDiscovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery(
  api_gateway: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | api_gateway block. |

---

##### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery.property.apiGateway"></a>

```python
api_gateway: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#api_gateway GoogleBeyondcorpSecurityGateway#api_gateway}

---

### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway(
  resource_override: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.property.resourceOverride">resource_override</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | resource_override block. |

---

##### `resource_override`<sup>Optional</sup> <a name="resource_override" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.property.resourceOverride"></a>

```python
resource_override: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

resource_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#resource_override GoogleBeyondcorpSecurityGateway#resource_override}

---

### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride(
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.property.path">path</a></code> | <code>str</code> | Contains uri path fragment where HTTP request is sent. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.property.path"></a>

```python
path: str
```

- *Type:* str

Contains uri path fragment where HTTP request is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#path GoogleBeyondcorpSecurityGateway#path}

---

### GoogleBeyondcorpSecurityGatewayTimeouts <a name="GoogleBeyondcorpSecurityGatewayTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">assigned_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assigned_ips`<sup>Required</sup> <a name="assigned_ips" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```python
assigned_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### GoogleBeyondcorpSecurityGatewayHubsList <a name="GoogleBeyondcorpSecurityGatewayHubsList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBeyondcorpSecurityGatewayHubs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]

---


### GoogleBeyondcorpSecurityGatewayHubsOutputReference <a name="GoogleBeyondcorpSecurityGatewayHubsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway">put_internet_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway">reset_internet_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internet_gateway` <a name="put_internet_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway"></a>

```python
def put_internet_gateway() -> None
```

##### `reset_internet_gateway` <a name="reset_internet_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway"></a>

```python
def reset_internet_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput">internet_gateway_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internet_gateway`<sup>Required</sup> <a name="internet_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```python
internet_gateway: GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a>

---

##### `internet_gateway_input`<sup>Optional</sup> <a name="internet_gateway_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput"></a>

```python
internet_gateway_input: GoogleBeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBeyondcorpSecurityGatewayHubs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>

---


### GoogleBeyondcorpSecurityGatewayLoggingOutputReference <a name="GoogleBeyondcorpSecurityGatewayLoggingOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayLogging
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo">put_device_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo">put_group_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo">put_user_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetDeviceInfo">reset_device_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetGroupInfo">reset_group_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetUserInfo">reset_user_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_device_info` <a name="put_device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo"></a>

```python
def put_device_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

##### `put_group_info` <a name="put_group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo"></a>

```python
def put_group_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

##### `put_user_info` <a name="put_user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo"></a>

```python
def put_user_info(
  output_type: str = None
) -> None
```

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo.parameter.outputType"></a>

- *Type:* str

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

##### `reset_device_info` <a name="reset_device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetDeviceInfo"></a>

```python
def reset_device_info() -> None
```

##### `reset_group_info` <a name="reset_group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetGroupInfo"></a>

```python
def reset_group_info() -> None
```

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```

##### `reset_user_info` <a name="reset_user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetUserInfo"></a>

```python
def reset_user_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo">device_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo">group_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo">user_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfoInput">device_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfoInput">group_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfoInput">user_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_info`<sup>Required</sup> <a name="device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo"></a>

```python
device_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference</a>

---

##### `group_info`<sup>Required</sup> <a name="group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo"></a>

```python
group_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference</a>

---

##### `user_info`<sup>Required</sup> <a name="user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo"></a>

```python
user_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference</a>

---

##### `device_info_input`<sup>Optional</sup> <a name="device_info_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfoInput"></a>

```python
device_info_input: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---

##### `group_info_input`<sup>Optional</sup> <a name="group_info_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfoInput"></a>

```python
group_info_input: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `user_info_input`<sup>Optional</sup> <a name="user_info_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfoInput"></a>

```python
user_info_input: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders">put_contextual_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetAllowedClientHeaders">reset_allowed_client_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetClientIp">reset_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetContextualHeaders">reset_contextual_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetGatewayIdentity">reset_gateway_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetMetadataHeaders">reset_metadata_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_contextual_headers` <a name="put_contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders"></a>

```python
def put_contextual_headers(
  device_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo = None,
  group_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo = None,
  output_type: str = None,
  user_info: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo = None
) -> None
```

###### `device_info`<sup>Optional</sup> <a name="device_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.deviceInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#device_info GoogleBeyondcorpSecurityGateway#device_info}

---

###### `group_info`<sup>Optional</sup> <a name="group_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.groupInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#group_info GoogleBeyondcorpSecurityGateway#group_info}

---

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.outputType"></a>

- *Type:* str

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

###### `user_info`<sup>Optional</sup> <a name="user_info" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.userInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#user_info GoogleBeyondcorpSecurityGateway#user_info}

---

##### `reset_allowed_client_headers` <a name="reset_allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetAllowedClientHeaders"></a>

```python
def reset_allowed_client_headers() -> None
```

##### `reset_client_ip` <a name="reset_client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetClientIp"></a>

```python
def reset_client_ip() -> None
```

##### `reset_contextual_headers` <a name="reset_contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetContextualHeaders"></a>

```python
def reset_contextual_headers() -> None
```

##### `reset_gateway_identity` <a name="reset_gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetGatewayIdentity"></a>

```python
def reset_gateway_identity() -> None
```

##### `reset_metadata_headers` <a name="reset_metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetMetadataHeaders"></a>

```python
def reset_metadata_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders">contextual_headers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeadersInput">allowed_client_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIpInput">client_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeadersInput">contextual_headers_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentityInput">gateway_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeadersInput">metadata_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders">allowed_client_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp">client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity">gateway_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders">metadata_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contextual_headers`<sup>Required</sup> <a name="contextual_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders"></a>

```python
contextual_headers: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference</a>

---

##### `allowed_client_headers_input`<sup>Optional</sup> <a name="allowed_client_headers_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeadersInput"></a>

```python
allowed_client_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_ip_input`<sup>Optional</sup> <a name="client_ip_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIpInput"></a>

```python
client_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contextual_headers_input`<sup>Optional</sup> <a name="contextual_headers_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeadersInput"></a>

```python
contextual_headers_input: GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---

##### `gateway_identity_input`<sup>Optional</sup> <a name="gateway_identity_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentityInput"></a>

```python
gateway_identity_input: str
```

- *Type:* str

---

##### `metadata_headers_input`<sup>Optional</sup> <a name="metadata_headers_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeadersInput"></a>

```python
metadata_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_client_headers`<sup>Required</sup> <a name="allowed_client_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders"></a>

```python
allowed_client_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp"></a>

```python
client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_identity`<sup>Required</sup> <a name="gateway_identity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity"></a>

```python
gateway_identity: str
```

- *Type:* str

---

##### `metadata_headers`<sup>Required</sup> <a name="metadata_headers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders"></a>

```python
metadata_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayProxyProtocolConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---


### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride">put_resource_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resetResourceOverride">reset_resource_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_override` <a name="put_resource_override" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride"></a>

```python
def put_resource_override(
  path: str = None
) -> None
```

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride.parameter.path"></a>

- *Type:* str

Contains uri path fragment where HTTP request is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#path GoogleBeyondcorpSecurityGateway#path}

---

##### `reset_resource_override` <a name="reset_resource_override" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resetResourceOverride"></a>

```python
def reset_resource_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride">resource_override</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverrideInput">resource_override_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_override`<sup>Required</sup> <a name="resource_override" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride"></a>

```python
resource_override: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference</a>

---

##### `resource_override_input`<sup>Optional</sup> <a name="resource_override_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverrideInput"></a>

```python
resource_override_input: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---


### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---


### GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway">put_api_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resetApiGateway">reset_api_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_gateway` <a name="put_api_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway"></a>

```python
def put_api_gateway(
  resource_override: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride = None
) -> None
```

###### `resource_override`<sup>Optional</sup> <a name="resource_override" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway.parameter.resourceOverride"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

resource_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_security_gateway#resource_override GoogleBeyondcorpSecurityGateway#resource_override}

---

##### `reset_api_gateway` <a name="reset_api_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resetApiGateway"></a>

```python
def reset_api_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGatewayInput">api_gateway_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_gateway`<sup>Required</sup> <a name="api_gateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway"></a>

```python
api_gateway: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference</a>

---

##### `api_gateway_input`<sup>Optional</sup> <a name="api_gateway_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGatewayInput"></a>

```python
api_gateway_input: GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayServiceDiscovery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---


### GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference <a name="GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBeyondcorpSecurityGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

---



