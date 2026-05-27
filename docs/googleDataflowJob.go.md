# `googleDataflowJob` Submodule <a name="`googleDataflowJob` Submodule" id="@cdktn/provider-google-beta.googleDataflowJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowJob <a name="GoogleDataflowJob" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job google_dataflow_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

googledataflowjob.NewGoogleDataflowJob(scope Construct, id *string, config GoogleDataflowJobConfig) GoogleDataflowJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig">GoogleDataflowJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig">GoogleDataflowJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSkipWaitOnJobTermination">ResetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataflowJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

---

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetAdditionalExperiments"></a>

```go
func ResetAdditionalExperiments()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetEnableStreamingEngine"></a>

```go
func ResetEnableStreamingEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetId"></a>

```go
func ResetId()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetMaxWorkers"></a>

```go
func ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetOnDelete"></a>

```go
func ResetOnDelete()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSkipWaitOnJobTermination` <a name="ResetSkipWaitOnJobTermination" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSkipWaitOnJobTermination"></a>

```go
func ResetSkipWaitOnJobTermination()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetTransformNameMapping"></a>

```go
func ResetTransformNameMapping()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataflowJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

googledataflowjob.GoogleDataflowJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

googledataflowjob.GoogleDataflowJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

googledataflowjob.GoogleDataflowJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

googledataflowjob.GoogleDataflowJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDataflowJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataflowJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataflowJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataflowJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference">GoogleDataflowJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDeleteInput">OnDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTerminationInput">SkipWaitOnJobTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocationInput">TempGcsLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPathInput">TemplateGcsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDelete">OnDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocation">TempGcsLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPath">TemplateGcsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeouts"></a>

```go
func Timeouts() GoogleDataflowJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference">GoogleDataflowJobTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperimentsInput"></a>

```go
func AdditionalExperimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngineInput"></a>

```go
func EnableStreamingEngineInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDeleteInput"></a>

```go
func OnDeleteInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="SkipWaitOnJobTerminationInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTerminationInput"></a>

```go
func SkipWaitOnJobTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TempGcsLocationInput`<sup>Optional</sup> <a name="TempGcsLocationInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocationInput"></a>

```go
func TempGcsLocationInput() *string
```

- *Type:* *string

---

##### `TemplateGcsPathInput`<sup>Optional</sup> <a name="TemplateGcsPathInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPathInput"></a>

```go
func TemplateGcsPathInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMappingInput"></a>

```go
func TransformNameMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.additionalExperiments"></a>

```go
func AdditionalExperiments() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.enableStreamingEngine"></a>

```go
func EnableStreamingEngine() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.ipConfiguration"></a>

```go
func IpConfiguration() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.onDelete"></a>

```go
func OnDelete() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `SkipWaitOnJobTermination`<sup>Required</sup> <a name="SkipWaitOnJobTermination" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.skipWaitOnJobTermination"></a>

```go
func SkipWaitOnJobTermination() interface{}
```

- *Type:* interface{}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `TempGcsLocation`<sup>Required</sup> <a name="TempGcsLocation" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tempGcsLocation"></a>

```go
func TempGcsLocation() *string
```

- *Type:* *string

---

##### `TemplateGcsPath`<sup>Required</sup> <a name="TemplateGcsPath" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.templateGcsPath"></a>

```go
func TemplateGcsPath() *string
```

- *Type:* *string

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.transformNameMapping"></a>

```go
func TransformNameMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowJobConfig <a name="GoogleDataflowJobConfig" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

&googledataflowjob.GoogleDataflowJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TempGcsLocation: *string,
	TemplateGcsPath: *string,
	AdditionalExperiments: *[]*string,
	DeletionPolicy: *string,
	EnableStreamingEngine: interface{},
	Id: *string,
	IpConfiguration: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	MachineType: *string,
	MaxWorkers: *f64,
	Network: *string,
	OnDelete: *string,
	Parameters: *map[string]*string,
	Project: *string,
	Region: *string,
	ServiceAccountEmail: *string,
	SkipWaitOnJobTermination: interface{},
	Subnetwork: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDataflowJob.GoogleDataflowJobTimeouts,
	TransformNameMapping: *map[string]*string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.name">Name</a></code> | <code>*string</code> | A unique name for the resource, required by Dataflow. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.tempGcsLocation">TempGcsLocation</a></code> | <code>*string</code> | A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.templateGcsPath">TemplateGcsPath</a></code> | <code>*string</code> | The Google Cloud Storage path to the Dataflow job template. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.additionalExperiments">AdditionalExperiments</a></code> | <code>*[]*string</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>interface{}</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.ipConfiguration">IpConfiguration</a></code> | <code>*string</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.network">Network</a></code> | <code>*string</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.onDelete">OnDelete</a></code> | <code>*string</code> | One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Key/Value pairs to be passed to the Dataflow job (as used in the template). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.region">Region</a></code> | <code>*string</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>interface{}</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.transformNameMapping">TransformNameMapping</a></code> | <code>*map[string]*string</code> | Only applicable when updating a pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone in which the created job should run. If it is not provided, the provider zone is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name for the resource, required by Dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#name GoogleDataflowJob#name}

---

##### `TempGcsLocation`<sup>Required</sup> <a name="TempGcsLocation" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.tempGcsLocation"></a>

```go
TempGcsLocation *string
```

- *Type:* *string

A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#temp_gcs_location GoogleDataflowJob#temp_gcs_location}

---

##### `TemplateGcsPath`<sup>Required</sup> <a name="TemplateGcsPath" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.templateGcsPath"></a>

```go
TemplateGcsPath *string
```

- *Type:* *string

The Google Cloud Storage path to the Dataflow job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#template_gcs_path GoogleDataflowJob#template_gcs_path}

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.additionalExperiments"></a>

```go
AdditionalExperiments *[]*string
```

- *Type:* *[]*string

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#additional_experiments GoogleDataflowJob#additional_experiments}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#deletion_policy GoogleDataflowJob#deletion_policy}

---

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.enableStreamingEngine"></a>

```go
EnableStreamingEngine interface{}
```

- *Type:* interface{}

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#enable_streaming_engine GoogleDataflowJob#enable_streaming_engine}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#id GoogleDataflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.ipConfiguration"></a>

```go
IpConfiguration *string
```

- *Type:* *string

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#ip_configuration GoogleDataflowJob#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#kms_key_name GoogleDataflowJob#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#labels GoogleDataflowJob#labels}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#machine_type GoogleDataflowJob#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#max_workers GoogleDataflowJob#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#network GoogleDataflowJob#network}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.onDelete"></a>

```go
OnDelete *string
```

- *Type:* *string

One of "drain" or "cancel". Specifies behavior of deletion during terraform destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#on_delete GoogleDataflowJob#on_delete}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Key/Value pairs to be passed to the Dataflow job (as used in the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#parameters GoogleDataflowJob#parameters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#project GoogleDataflowJob#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#region GoogleDataflowJob#region}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#service_account_email GoogleDataflowJob#service_account_email}

---

##### `SkipWaitOnJobTermination`<sup>Optional</sup> <a name="SkipWaitOnJobTermination" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.skipWaitOnJobTermination"></a>

```go
SkipWaitOnJobTermination interface{}
```

- *Type:* interface{}

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#skip_wait_on_job_termination GoogleDataflowJob#skip_wait_on_job_termination}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#subnetwork GoogleDataflowJob#subnetwork}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.timeouts"></a>

```go
Timeouts GoogleDataflowJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts">GoogleDataflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#timeouts GoogleDataflowJob#timeouts}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.transformNameMapping"></a>

```go
TransformNameMapping *map[string]*string
```

- *Type:* *map[string]*string

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#transform_name_mapping GoogleDataflowJob#transform_name_mapping}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone in which the created job should run. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#zone GoogleDataflowJob#zone}

---

### GoogleDataflowJobTimeouts <a name="GoogleDataflowJobTimeouts" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

&googledataflowjob.GoogleDataflowJobTimeouts {
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#update GoogleDataflowJob#update}. |

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataflow_job#update GoogleDataflowJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataflowJobTimeoutsOutputReference <a name="GoogleDataflowJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledataflowjob"

googledataflowjob.NewGoogleDataflowJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataflowJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataflowJob.GoogleDataflowJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



