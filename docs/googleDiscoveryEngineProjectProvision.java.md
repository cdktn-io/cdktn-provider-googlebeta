# `googleDiscoveryEngineProjectProvision` Submodule <a name="`googleDiscoveryEngineProjectProvision` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineProjectProvision <a name="GoogleDiscoveryEngineProjectProvision" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision google_discovery_engine_project_provision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvision;

GoogleDiscoveryEngineProjectProvision.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptDataUseTerms(java.lang.Boolean|IResolvable)
//  .dataUseTermsVersion(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .saasParams(GoogleDiscoveryEngineProjectProvisionSaasParams)
//  .timeouts(GoogleDiscoveryEngineProjectProvisionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>java.lang.String</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptDataUseTerms`<sup>Optional</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_data_use_terms GoogleDiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `dataUseTermsVersion`<sup>Optional</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion"></a>

- *Type:* java.lang.String

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#data_use_terms_version GoogleDiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#location GoogleDiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}.

---

##### `saasParams`<sup>Optional</sup> <a name="saasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.saasParams"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#saas_params GoogleDiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#timeouts GoogleDiscoveryEngineProjectProvision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams">putSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms">resetAcceptDataUseTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion">resetDataUseTermsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams">resetSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSaasParams` <a name="putSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams"></a>

```java
public void putSaasParams(GoogleDiscoveryEngineProjectProvisionSaasParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineProjectProvisionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---

##### `resetAcceptDataUseTerms` <a name="resetAcceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms"></a>

```java
public void resetAcceptDataUseTerms()
```

##### `resetDataUseTermsVersion` <a name="resetDataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion"></a>

```java
public void resetDataUseTermsVersion()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject"></a>

```java
public void resetProject()
```

##### `resetSaasParams` <a name="resetSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams"></a>

```java
public void resetSaasParams()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvision;

GoogleDiscoveryEngineProjectProvision.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvision;

GoogleDiscoveryEngineProjectProvision.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvision;

GoogleDiscoveryEngineProjectProvision.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvision;

GoogleDiscoveryEngineProjectProvision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineProjectProvision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineProjectProvision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineProjectProvision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineProjectProvision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput">acceptDataUseTermsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput">dataUseTermsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput">saasParamsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `saasParams`<sup>Required</sup> <a name="saasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams"></a>

```java
public GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference getSaasParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts"></a>

```java
public GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a>

---

##### `acceptDataUseTermsInput`<sup>Optional</sup> <a name="acceptDataUseTermsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptDataUseTermsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataUseTermsVersionInput`<sup>Optional</sup> <a name="dataUseTermsVersionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput"></a>

```java
public java.lang.String getDataUseTermsVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `saasParamsInput`<sup>Optional</sup> <a name="saasParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput"></a>

```java
public GoogleDiscoveryEngineProjectProvisionSaasParams getSaasParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDiscoveryEngineProjectProvisionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---

##### `acceptDataUseTerms`<sup>Required</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms"></a>

```java
public java.lang.Boolean|IResolvable getAcceptDataUseTerms();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataUseTermsVersion`<sup>Required</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion"></a>

```java
public java.lang.String getDataUseTermsVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineProjectProvisionConfig <a name="GoogleDiscoveryEngineProjectProvisionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvisionConfig;

GoogleDiscoveryEngineProjectProvisionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptDataUseTerms(java.lang.Boolean|IResolvable)
//  .dataUseTermsVersion(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .saasParams(GoogleDiscoveryEngineProjectProvisionSaasParams)
//  .timeouts(GoogleDiscoveryEngineProjectProvisionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>java.lang.String</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptDataUseTerms`<sup>Optional</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms"></a>

```java
public java.lang.Boolean|IResolvable getAcceptDataUseTerms();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_data_use_terms GoogleDiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `dataUseTermsVersion`<sup>Optional</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion"></a>

```java
public java.lang.String getDataUseTermsVersion();
```

- *Type:* java.lang.String

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#data_use_terms_version GoogleDiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#location GoogleDiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}.

---

##### `saasParams`<sup>Optional</sup> <a name="saasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams"></a>

```java
public GoogleDiscoveryEngineProjectProvisionSaasParams getSaasParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#saas_params GoogleDiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineProjectProvisionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#timeouts GoogleDiscoveryEngineProjectProvision#timeouts}

---

### GoogleDiscoveryEngineProjectProvisionSaasParams <a name="GoogleDiscoveryEngineProjectProvisionSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvisionSaasParams;

GoogleDiscoveryEngineProjectProvisionSaasParams.builder()
//  .acceptBizQos(java.lang.Boolean|IResolvable)
//  .isBiz(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos">acceptBizQos</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz">isBiz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the current request is for Business edition ('true') or not ('false'). |

---

##### `acceptBizQos`<sup>Optional</sup> <a name="acceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos"></a>

```java
public java.lang.Boolean|IResolvable getAcceptBizQos();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_biz_qos GoogleDiscoveryEngineProjectProvision#accept_biz_qos}

---

##### `isBiz`<sup>Optional</sup> <a name="isBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz"></a>

```java
public java.lang.Boolean|IResolvable getIsBiz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#is_biz GoogleDiscoveryEngineProjectProvision#is_biz}

---

### GoogleDiscoveryEngineProjectProvisionTimeouts <a name="GoogleDiscoveryEngineProjectProvisionTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvisionTimeouts;

GoogleDiscoveryEngineProjectProvisionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference;

new GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos">resetAcceptBizQos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz">resetIsBiz</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceptBizQos` <a name="resetAcceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos"></a>

```java
public void resetAcceptBizQos()
```

##### `resetIsBiz` <a name="resetIsBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz"></a>

```java
public void resetIsBiz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput">acceptBizQosInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput">isBizInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos">acceptBizQos</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz">isBiz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptBizQosInput`<sup>Optional</sup> <a name="acceptBizQosInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptBizQosInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isBizInput`<sup>Optional</sup> <a name="isBizInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput"></a>

```java
public java.lang.Boolean|IResolvable getIsBizInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `acceptBizQos`<sup>Required</sup> <a name="acceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos"></a>

```java
public java.lang.Boolean|IResolvable getAcceptBizQos();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isBiz`<sup>Required</sup> <a name="isBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz"></a>

```java
public java.lang.Boolean|IResolvable getIsBiz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineProjectProvisionSaasParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---


### GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_project_provision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference;

new GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineProjectProvisionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---



