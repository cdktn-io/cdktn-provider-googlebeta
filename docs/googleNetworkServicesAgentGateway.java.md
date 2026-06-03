# `googleNetworkServicesAgentGateway` Submodule <a name="`googleNetworkServicesAgentGateway` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentGateway <a name="GoogleNetworkServicesAgentGateway" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway google_network_services_agent_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGateway;

GoogleNetworkServicesAgentGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .protocols(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .googleManaged(GoogleNetworkServicesAgentGatewayGoogleManaged)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .networkConfig(GoogleNetworkServicesAgentGatewayNetworkConfig)
//  .project(java.lang.String)
//  .registries(java.util.List<java.lang.String>)
//  .selfManaged(GoogleNetworkServicesAgentGatewaySelfManaged)
//  .timeouts(GoogleNetworkServicesAgentGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.googleManaged">googleManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.registries">registries</a></code> | <code>java.util.List<java.lang.String></code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#location GoogleNetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#name GoogleNetworkServicesAgentGateway#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#protocols GoogleNetworkServicesAgentGateway#protocols}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#deletion_policy GoogleNetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#description GoogleNetworkServicesAgentGateway#description}

---

##### `googleManaged`<sup>Optional</sup> <a name="googleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.googleManaged"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#google_managed GoogleNetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#labels GoogleNetworkServicesAgentGateway#labels}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_config GoogleNetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}.

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.registries"></a>

- *Type:* java.util.List<java.lang.String>

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#registries GoogleNetworkServicesAgentGateway#registries}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#self_managed GoogleNetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#timeouts GoogleNetworkServicesAgentGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged">putGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged">resetGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries">resetRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGoogleManaged` <a name="putGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged"></a>

```java
public void putGoogleManaged(GoogleNetworkServicesAgentGatewayGoogleManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig"></a>

```java
public void putNetworkConfig(GoogleNetworkServicesAgentGatewayNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged"></a>

```java
public void putSelfManaged(GoogleNetworkServicesAgentGatewaySelfManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesAgentGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGoogleManaged` <a name="resetGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged"></a>

```java
public void resetGoogleManaged()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegistries` <a name="resetRegistries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries"></a>

```java
public void resetRegistries()
```

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged"></a>

```java
public void resetSelfManaged()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGateway;

GoogleNetworkServicesAgentGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGateway;

GoogleNetworkServicesAgentGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGateway;

GoogleNetworkServicesAgentGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGateway;

GoogleNetworkServicesAgentGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesAgentGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesAgentGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesAgentGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard">agentGatewayCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged">googleManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput">googleManagedInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput">registriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput">selfManagedInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries">registries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentGatewayCard`<sup>Required</sup> <a name="agentGatewayCard" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard"></a>

```java
public GoogleNetworkServicesAgentGatewayAgentGatewayCardList getAgentGatewayCard();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `googleManaged`<sup>Required</sup> <a name="googleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged"></a>

```java
public GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference getGoogleManaged();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a>

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged"></a>

```java
public GoogleNetworkServicesAgentGatewaySelfManagedOutputReference getSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts"></a>

```java
public GoogleNetworkServicesAgentGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `googleManagedInput`<sup>Optional</sup> <a name="googleManagedInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput"></a>

```java
public GoogleNetworkServicesAgentGatewayGoogleManaged getGoogleManagedInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registriesInput`<sup>Optional</sup> <a name="registriesInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput"></a>

```java
public java.util.List<java.lang.String> getRegistriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput"></a>

```java
public GoogleNetworkServicesAgentGatewaySelfManaged getSelfManagedInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesAgentGatewayTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registries`<sup>Required</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries"></a>

```java
public java.util.List<java.lang.String> getRegistries();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCard <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCard" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard;

GoogleNetworkServicesAgentGatewayAgentGatewayCard.builder()
    .build();
```


### GoogleNetworkServicesAgentGatewayConfig <a name="GoogleNetworkServicesAgentGatewayConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayConfig;

GoogleNetworkServicesAgentGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .protocols(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .googleManaged(GoogleNetworkServicesAgentGatewayGoogleManaged)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .networkConfig(GoogleNetworkServicesAgentGatewayNetworkConfig)
//  .project(java.lang.String)
//  .registries(java.util.List<java.lang.String>)
//  .selfManaged(GoogleNetworkServicesAgentGatewaySelfManaged)
//  .timeouts(GoogleNetworkServicesAgentGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged">googleManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries">registries</a></code> | <code>java.util.List<java.lang.String></code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#location GoogleNetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#name GoogleNetworkServicesAgentGateway#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#protocols GoogleNetworkServicesAgentGateway#protocols}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#deletion_policy GoogleNetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#description GoogleNetworkServicesAgentGateway#description}

---

##### `googleManaged`<sup>Optional</sup> <a name="googleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged"></a>

```java
public GoogleNetworkServicesAgentGatewayGoogleManaged getGoogleManaged();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#google_managed GoogleNetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#labels GoogleNetworkServicesAgentGateway#labels}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_config GoogleNetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}.

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries"></a>

```java
public java.util.List<java.lang.String> getRegistries();
```

- *Type:* java.util.List<java.lang.String>

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#registries GoogleNetworkServicesAgentGateway#registries}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged"></a>

```java
public GoogleNetworkServicesAgentGatewaySelfManaged getSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#self_managed GoogleNetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesAgentGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#timeouts GoogleNetworkServicesAgentGateway#timeouts}

---

### GoogleNetworkServicesAgentGatewayGoogleManaged <a name="GoogleNetworkServicesAgentGatewayGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayGoogleManaged;

GoogleNetworkServicesAgentGatewayGoogleManaged.builder()
    .governedAccessPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath">governedAccessPath</a></code> | <code>java.lang.String</code> | Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"]. |

---

##### `governedAccessPath`<sup>Required</sup> <a name="governedAccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath"></a>

```java
public java.lang.String getGovernedAccessPath();
```

- *Type:* java.lang.String

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#governed_access_path GoogleNetworkServicesAgentGateway#governed_access_path}

---

### GoogleNetworkServicesAgentGatewayNetworkConfig <a name="GoogleNetworkServicesAgentGatewayNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayNetworkConfig;

GoogleNetworkServicesAgentGatewayNetworkConfig.builder()
    .egress(GoogleNetworkServicesAgentGatewayNetworkConfigEgress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | egress block. |

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfigEgress getEgress();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#egress GoogleNetworkServicesAgentGateway#egress}

---

### GoogleNetworkServicesAgentGatewayNetworkConfigEgress <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress;

GoogleNetworkServicesAgentGatewayNetworkConfigEgress.builder()
    .networkAttachment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | The URI of the Network Attachment resource. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_attachment GoogleNetworkServicesAgentGateway#network_attachment}

---

### GoogleNetworkServicesAgentGatewaySelfManaged <a name="GoogleNetworkServicesAgentGatewaySelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewaySelfManaged;

GoogleNetworkServicesAgentGatewaySelfManaged.builder()
    .resourceUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | A supported Google Cloud networking proxy in the Project and Location. |

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#resource_uri GoogleNetworkServicesAgentGateway#resource_uri}

---

### GoogleNetworkServicesAgentGatewayTimeouts <a name="GoogleNetworkServicesAgentGatewayTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayTimeouts;

GoogleNetworkServicesAgentGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCardList <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardList" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList;

new GoogleNetworkServicesAgentGatewayAgentGatewayCardList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get"></a>

```java
public GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference;

new GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint">mtlsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates">rootCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount">serviceExtensionsServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mtlsEndpoint`<sup>Required</sup> <a name="mtlsEndpoint" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint"></a>

```java
public java.lang.String getMtlsEndpoint();
```

- *Type:* java.lang.String

---

##### `rootCertificates`<sup>Required</sup> <a name="rootCertificates" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates"></a>

```java
public java.util.List<java.lang.String> getRootCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceExtensionsServiceAccount`<sup>Required</sup> <a name="serviceExtensionsServiceAccount" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount"></a>

```java
public java.lang.String getServiceExtensionsServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentGatewayAgentGatewayCard getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a>

---


### GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference <a name="GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference;

new GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput">governedAccessPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath">governedAccessPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `governedAccessPathInput`<sup>Optional</sup> <a name="governedAccessPathInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput"></a>

```java
public java.lang.String getGovernedAccessPathInput();
```

- *Type:* java.lang.String

---

##### `governedAccessPath`<sup>Required</sup> <a name="governedAccessPath" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath"></a>

```java
public java.lang.String getGovernedAccessPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentGatewayGoogleManaged getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference;

new GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfigEgress getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference;

new GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress">putEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgress` <a name="putEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress"></a>

```java
public void putEgress(GoogleNetworkServicesAgentGatewayNetworkConfigEgress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput">egressInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference getEgress();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfigEgress getEgressInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentGatewayNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---


### GoogleNetworkServicesAgentGatewaySelfManagedOutputReference <a name="GoogleNetworkServicesAgentGatewaySelfManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference;

new GoogleNetworkServicesAgentGatewaySelfManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput">resourceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri">resourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput"></a>

```java
public java.lang.String getResourceUriInput();
```

- *Type:* java.lang.String

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri"></a>

```java
public java.lang.String getResourceUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesAgentGatewaySelfManaged getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---


### GoogleNetworkServicesAgentGatewayTimeoutsOutputReference <a name="GoogleNetworkServicesAgentGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_agent_gateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference;

new GoogleNetworkServicesAgentGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesAgentGatewayTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---



