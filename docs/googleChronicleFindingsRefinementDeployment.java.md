# `googleChronicleFindingsRefinementDeployment` Submodule <a name="`googleChronicleFindingsRefinementDeployment` Submodule" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleFindingsRefinementDeployment <a name="GoogleChronicleFindingsRefinementDeployment" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeployment;

GoogleChronicleFindingsRefinementDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .findingsRefinement(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .archived(java.lang.Boolean|IResolvable)
//  .detectionExclusionApplication(GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleFindingsRefinementDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement">findingsRefinement</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#findings_refinement GoogleChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#instance GoogleChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#location GoogleChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#archived GoogleChronicleFindingsRefinementDeployment#archived}

---

##### `detectionExclusionApplication`<sup>Optional</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#detection_exclusion_application GoogleChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#enabled GoogleChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#timeouts GoogleChronicleFindingsRefinementDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication">putDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication">resetDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetectionExclusionApplication` <a name="putDetectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication"></a>

```java
public void putDetectionExclusionApplication(GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleChronicleFindingsRefinementDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `resetArchived` <a name="resetArchived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetDetectionExclusionApplication` <a name="resetDetectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication"></a>

```java
public void resetDetectionExclusionApplication()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeployment;

GoogleChronicleFindingsRefinementDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeployment;

GoogleChronicleFindingsRefinementDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeployment;

GoogleChronicleFindingsRefinementDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeployment;

GoogleChronicleFindingsRefinementDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleChronicleFindingsRefinementDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleChronicleFindingsRefinementDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleChronicleFindingsRefinementDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleFindingsRefinementDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference">GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput">detectionExclusionApplicationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinementInput">findingsRefinementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinement">findingsRefinement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `detectionExclusionApplication`<sup>Required</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplication"></a>

```java
public GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference getDetectionExclusionApplication();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeouts"></a>

```java
public GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference">GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archivedInput"></a>

```java
public java.lang.Boolean|IResolvable getArchivedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `detectionExclusionApplicationInput`<sup>Optional</sup> <a name="detectionExclusionApplicationInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput"></a>

```java
public GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication getDetectionExclusionApplicationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `findingsRefinementInput`<sup>Optional</sup> <a name="findingsRefinementInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinementInput"></a>

```java
public java.lang.String getFindingsRefinementInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleChronicleFindingsRefinementDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinement"></a>

```java
public java.lang.String getFindingsRefinement();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleFindingsRefinementDeploymentConfig <a name="GoogleChronicleFindingsRefinementDeploymentConfig" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeploymentConfig;

GoogleChronicleFindingsRefinementDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .findingsRefinement(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .archived(java.lang.Boolean|IResolvable)
//  .detectionExclusionApplication(GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleFindingsRefinementDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement">findingsRefinement</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.archived">archived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement"></a>

```java
public java.lang.String getFindingsRefinement();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#findings_refinement GoogleChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#instance GoogleChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#location GoogleChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#archived GoogleChronicleFindingsRefinementDeployment#archived}

---

##### `detectionExclusionApplication`<sup>Optional</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication"></a>

```java
public GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication getDetectionExclusionApplication();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#detection_exclusion_application GoogleChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#enabled GoogleChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.timeouts"></a>

```java
public GoogleChronicleFindingsRefinementDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#timeouts GoogleChronicleFindingsRefinementDeployment#timeouts}

---

### GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication <a name="GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication;

GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.builder()
//  .curatedRules(java.util.List<java.lang.String>)
//  .curatedRuleSets(java.util.List<java.lang.String>)
//  .rules(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules">curatedRules</a></code> | <code>java.util.List<java.lang.String></code> | The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets">curatedRuleSets</a></code> | <code>java.util.List<java.lang.String></code> | The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules">rules</a></code> | <code>java.util.List<java.lang.String></code> | The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}. |

---

##### `curatedRules`<sup>Optional</sup> <a name="curatedRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules"></a>

```java
public java.util.List<java.lang.String> getCuratedRules();
```

- *Type:* java.util.List<java.lang.String>

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rules GoogleChronicleFindingsRefinementDeployment#curated_rules}

---

##### `curatedRuleSets`<sup>Optional</sup> <a name="curatedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets"></a>

```java
public java.util.List<java.lang.String> getCuratedRuleSets();
```

- *Type:* java.util.List<java.lang.String>

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rule_sets GoogleChronicleFindingsRefinementDeployment#curated_rule_sets}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules"></a>

```java
public java.util.List<java.lang.String> getRules();
```

- *Type:* java.util.List<java.lang.String>

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#rules GoogleChronicleFindingsRefinementDeployment#rules}

---

### GoogleChronicleFindingsRefinementDeploymentTimeouts <a name="GoogleChronicleFindingsRefinementDeploymentTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeploymentTimeouts;

GoogleChronicleFindingsRefinementDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#create GoogleChronicleFindingsRefinementDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#delete GoogleChronicleFindingsRefinementDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#update GoogleChronicleFindingsRefinementDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#create GoogleChronicleFindingsRefinementDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#delete GoogleChronicleFindingsRefinementDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#update GoogleChronicleFindingsRefinementDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference <a name="GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference;

new GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules">resetCuratedRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets">resetCuratedRuleSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCuratedRules` <a name="resetCuratedRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules"></a>

```java
public void resetCuratedRules()
```

##### `resetCuratedRuleSets` <a name="resetCuratedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets"></a>

```java
public void resetCuratedRuleSets()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets">deletedCuratedRuleSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput">curatedRuleSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput">curatedRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput">rulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules">curatedRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets">curatedRuleSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules">rules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deletedCuratedRuleSets`<sup>Required</sup> <a name="deletedCuratedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets"></a>

```java
public java.util.List<java.lang.String> getDeletedCuratedRuleSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRuleSetsInput`<sup>Optional</sup> <a name="curatedRuleSetsInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput"></a>

```java
public java.util.List<java.lang.String> getCuratedRuleSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRulesInput`<sup>Optional</sup> <a name="curatedRulesInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput"></a>

```java
public java.util.List<java.lang.String> getCuratedRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput"></a>

```java
public java.util.List<java.lang.String> getRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRules`<sup>Required</sup> <a name="curatedRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules"></a>

```java
public java.util.List<java.lang.String> getCuratedRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `curatedRuleSets`<sup>Required</sup> <a name="curatedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets"></a>

```java
public java.util.List<java.lang.String> getCuratedRuleSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules"></a>

```java
public java.util.List<java.lang.String> getRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue"></a>

```java
public GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---


### GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference <a name="GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_findings_refinement_deployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference;

new GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleFindingsRefinementDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---



