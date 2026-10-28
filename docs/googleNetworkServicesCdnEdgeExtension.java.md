# `googleNetworkServicesCdnEdgeExtension` Submodule <a name="`googleNetworkServicesCdnEdgeExtension` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesCdnEdgeExtension <a name="GoogleNetworkServicesCdnEdgeExtension" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension google_network_services_cdn_edge_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtension;

GoogleNetworkServicesCdnEdgeExtension.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .extensionChains(IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChains>)
    .location(java.lang.String)
    .name(java.lang.String)
    .target(GoogleNetworkServicesCdnEdgeExtensionTarget)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesCdnEdgeExtensionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.extensionChains">extensionChains</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>></code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the CDN edge extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the CdnEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.extensionChains"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>>

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extension_chains GoogleNetworkServicesCdnEdgeExtension#extension_chains}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the CDN edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#location GoogleNetworkServicesCdnEdgeExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#target GoogleNetworkServicesCdnEdgeExtension#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#deletion_policy GoogleNetworkServicesCdnEdgeExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#description GoogleNetworkServicesCdnEdgeExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the CdnEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#labels GoogleNetworkServicesCdnEdgeExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#timeouts GoogleNetworkServicesCdnEdgeExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains">putExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionChains` <a name="putExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains"></a>

```java
public void putExtensionChains(IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChains> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget"></a>

```java
public void putTarget(GoogleNetworkServicesCdnEdgeExtensionTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesCdnEdgeExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtension;

GoogleNetworkServicesCdnEdgeExtension.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtension;

GoogleNetworkServicesCdnEdgeExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtension;

GoogleNetworkServicesCdnEdgeExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtension;

GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesCdnEdgeExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesCdnEdgeExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesCdnEdgeExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains">extensionChains</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput">extensionChainsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput">targetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList getExtensionChains();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `extensionChainsInput`<sup>Optional</sup> <a name="extensionChainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChains> getExtensionChainsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionTarget getTargetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesCdnEdgeExtensionConfig <a name="GoogleNetworkServicesCdnEdgeExtensionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionConfig;

GoogleNetworkServicesCdnEdgeExtensionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .extensionChains(IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChains>)
    .location(java.lang.String)
    .name(java.lang.String)
    .target(GoogleNetworkServicesCdnEdgeExtensionTarget)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesCdnEdgeExtensionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains">extensionChains</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>></code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the CDN edge extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the CdnEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChains> getExtensionChains();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>>

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extension_chains GoogleNetworkServicesCdnEdgeExtension#extension_chains}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the CDN edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#location GoogleNetworkServicesCdnEdgeExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionTarget getTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#target GoogleNetworkServicesCdnEdgeExtension#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#deletion_policy GoogleNetworkServicesCdnEdgeExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#description GoogleNetworkServicesCdnEdgeExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the CdnEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#labels GoogleNetworkServicesCdnEdgeExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#timeouts GoogleNetworkServicesCdnEdgeExtension#timeouts}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChains <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains;

GoogleNetworkServicesCdnEdgeExtensionExtensionChains.builder()
    .extensions(IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions>)
    .matchCondition(GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions">extensions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>></code> | extensions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name">name</a></code> | <code>java.lang.String</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions> getExtensions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>>

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extensions GoogleNetworkServicesCdnEdgeExtension#extensions}

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition getMatchCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#match_condition GoogleNetworkServicesCdnEdgeExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions;

GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.builder()
    .name(java.lang.String)
    .service(java.lang.String)
//  .failOpen(java.lang.Boolean|IResolvable)
//  .forwardAttributes(java.util.List<java.lang.String>)
//  .forwardHeaders(java.util.List<java.lang.String>)
//  .supportedEvents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>java.lang.String</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>java.lang.String</code> | The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes">forwardAttributes</a></code> | <code>java.util.List<java.lang.String></code> | List of the Envoy attributes to forward to the extension server. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents">supportedEvents</a></code> | <code>java.util.List<java.lang.String></code> | A set of events during request or response processing for which this extension is called. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#service GoogleNetworkServicesCdnEdgeExtension#service}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#fail_open GoogleNetworkServicesCdnEdgeExtension#fail_open}

---

##### `forwardAttributes`<sup>Optional</sup> <a name="forwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes"></a>

```java
public java.util.List<java.lang.String> getForwardAttributes();
```

- *Type:* java.util.List<java.lang.String>

List of the Envoy attributes to forward to the extension server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_attributes GoogleNetworkServicesCdnEdgeExtension#forward_attributes}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_headers GoogleNetworkServicesCdnEdgeExtension#forward_headers}

---

##### `supportedEvents`<sup>Optional</sup> <a name="supportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```java
public java.util.List<java.lang.String> getSupportedEvents();
```

- *Type:* java.util.List<java.lang.String>

A set of events during request or response processing for which this extension is called.

Eligible values are 'REQUEST_HEADERS' and 'RESPONSE_HEADERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#supported_events GoogleNetworkServicesCdnEdgeExtension#supported_events}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition;

GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.builder()
    .celExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression">celExpression</a></code> | <code>java.lang.String</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```java
public java.lang.String getCelExpression();
```

- *Type:* java.lang.String

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#cel_expression GoogleNetworkServicesCdnEdgeExtension#cel_expression}

---

### GoogleNetworkServicesCdnEdgeExtensionTarget <a name="GoogleNetworkServicesCdnEdgeExtensionTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionTarget;

GoogleNetworkServicesCdnEdgeExtensionTarget.builder()
    .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of references to the resources that are targeted by CdnEdgeExtension. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of references to the resources that are targeted by CdnEdgeExtension.

Types of resources supported: EdgeCacheService.
The format can be 'projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}' or
'//networkservices.googleapis.com/projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#resources GoogleNetworkServicesCdnEdgeExtension#resources}

---

### GoogleNetworkServicesCdnEdgeExtensionTimeouts <a name="GoogleNetworkServicesCdnEdgeExtensionTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionTimeouts;

GoogleNetworkServicesCdnEdgeExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes">resetForwardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">resetSupportedEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetForwardAttributes` <a name="resetForwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes"></a>

```java
public void resetForwardAttributes()
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```java
public void resetForwardHeaders()
```

##### `resetSupportedEvents` <a name="resetSupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```java
public void resetSupportedEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput">forwardAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supportedEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes">forwardAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supportedEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardAttributesInput`<sup>Optional</sup> <a name="forwardAttributesInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput"></a>

```java
public java.util.List<java.lang.String> getForwardAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```java
public java.util.List<java.lang.String> getForwardHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `supportedEventsInput`<sup>Optional</sup> <a name="supportedEventsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```java
public java.util.List<java.lang.String> getSupportedEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardAttributes`<sup>Required</sup> <a name="forwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes"></a>

```java
public java.util.List<java.lang.String> getForwardAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `supportedEvents`<sup>Required</sup> <a name="supportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```java
public java.util.List<java.lang.String> getSupportedEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChains> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">celExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```java
public java.lang.String getCelExpressionInput();
```

- *Type:* java.lang.String

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```java
public java.lang.String getCelExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensions` <a name="putExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions"></a>

```java
public void putExtensions(IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>>

---

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```java
public void putMatchCondition(GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList getExtensions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference getMatchCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions> getExtensionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>>

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition getMatchConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChains getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>

---


### GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference;

new GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesCdnEdgeExtensionTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---


### GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_cdn_edge_extension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference;

new GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---



