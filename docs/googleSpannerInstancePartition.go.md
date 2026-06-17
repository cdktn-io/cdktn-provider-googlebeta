# `googleSpannerInstancePartition` Submodule <a name="`googleSpannerInstancePartition` Submodule" id="@cdktn/provider-google-beta.googleSpannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstancePartition <a name="GoogleSpannerInstancePartition" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.NewGoogleSpannerInstancePartition(scope Construct, id *string, config GoogleSpannerInstancePartitionConfig) GoogleSpannerInstancePartition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig">GoogleSpannerInstancePartitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig">GoogleSpannerInstancePartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putAutoscalingConfig">PutAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetAutoscalingConfig">ResetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProcessingUnits">ResetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingConfig` <a name="PutAutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putAutoscalingConfig"></a>

```go
func PutAutoscalingConfig(value GoogleSpannerInstancePartitionAutoscalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSpannerInstancePartitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

---

##### `ResetAutoscalingConfig` <a name="ResetAutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetAutoscalingConfig"></a>

```go
func ResetAutoscalingConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetId"></a>

```go
func ResetId()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetProcessingUnits` <a name="ResetProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProcessingUnits"></a>

```go
func ResetProcessingUnits()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSpannerInstancePartition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.GoogleSpannerInstancePartition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.GoogleSpannerInstancePartition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.GoogleSpannerInstancePartition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.GoogleSpannerInstancePartition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleSpannerInstancePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSpannerInstancePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference">GoogleSpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfigInput">AutoscalingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.configInput">ConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnitsInput">ProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscalingConfig`<sup>Required</sup> <a name="AutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfig"></a>

```go
func AutoscalingConfig() GoogleSpannerInstancePartitionAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeouts"></a>

```go
func Timeouts() GoogleSpannerInstancePartitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference">GoogleSpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `AutoscalingConfigInput`<sup>Optional</sup> <a name="AutoscalingConfigInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfigInput"></a>

```go
func AutoscalingConfigInput() GoogleSpannerInstancePartitionAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.configInput"></a>

```go
func ConfigInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ProcessingUnitsInput`<sup>Optional</sup> <a name="ProcessingUnitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnitsInput"></a>

```go
func ProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `ProcessingUnits`<sup>Required</sup> <a name="ProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnits"></a>

```go
func ProcessingUnits() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstancePartitionAutoscalingConfig <a name="GoogleSpannerInstancePartitionAutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

&googlespannerinstancepartition.GoogleSpannerInstancePartitionAutoscalingConfig {
	AutoscalingLimits: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits,
	AutoscalingTargets: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `AutoscalingLimits`<sup>Optional</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits"></a>

```go
AutoscalingLimits GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#autoscaling_limits GoogleSpannerInstancePartition#autoscaling_limits}

---

##### `AutoscalingTargets`<sup>Optional</sup> <a name="AutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets"></a>

```go
AutoscalingTargets GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#autoscaling_targets GoogleSpannerInstancePartition#autoscaling_targets}

---

### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

&googlespannerinstancepartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits {
	MaxNodes: *f64,
	MaxProcessingUnits: *f64,
	MinNodes: *f64,
	MinProcessingUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | Specifies maximum number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | Specifies maximum number of processing units allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes">MinNodes</a></code> | <code>*f64</code> | Specifies number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000. |

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

Specifies maximum number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#max_nodes GoogleSpannerInstancePartition#max_nodes}

---

##### `MaxProcessingUnits`<sup>Optional</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```go
MaxProcessingUnits *f64
```

- *Type:* *f64

Specifies maximum number of processing units allocated to the instance partition.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#max_processing_units GoogleSpannerInstancePartition#max_processing_units}

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

Specifies number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#min_nodes GoogleSpannerInstancePartition#min_nodes}

---

##### `MinProcessingUnits`<sup>Optional</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```go
MinProcessingUnits *f64
```

- *Type:* *f64

Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#min_processing_units GoogleSpannerInstancePartition#min_processing_units}

---

### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

&googlespannerinstancepartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets {
	HighPriorityCpuUtilizationPercent: *f64,
	StorageUtilizationPercent: *f64,
	TotalCpuUtilizationPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>*f64</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent">TotalCpuUtilizationPercent</a></code> | <code>*f64</code> | Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |

---

##### `HighPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```go
HighPriorityCpuUtilizationPercent *f64
```

- *Type:* *f64

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#high_priority_cpu_utilization_percent GoogleSpannerInstancePartition#high_priority_cpu_utilization_percent}

---

##### `StorageUtilizationPercent`<sup>Optional</sup> <a name="StorageUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```go
StorageUtilizationPercent *f64
```

- *Type:* *f64

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#storage_utilization_percent GoogleSpannerInstancePartition#storage_utilization_percent}

---

##### `TotalCpuUtilizationPercent`<sup>Optional</sup> <a name="TotalCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent"></a>

```go
TotalCpuUtilizationPercent *f64
```

- *Type:* *f64

Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
The value should be higher than high_priority_cpu_utilization_percent if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#total_cpu_utilization_percent GoogleSpannerInstancePartition#total_cpu_utilization_percent}

---

### GoogleSpannerInstancePartitionConfig <a name="GoogleSpannerInstancePartitionConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

&googlespannerinstancepartition.GoogleSpannerInstancePartitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Config: *string,
	DisplayName: *string,
	Instance: *string,
	Name: *string,
	AutoscalingConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig,
	DeletionPolicy: *string,
	Id: *string,
	NodeCount: *f64,
	ProcessingUnits: *f64,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.config">Config</a></code> | <code>*string</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.instance">Instance</a></code> | <code>*string</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.processingUnits">ProcessingUnits</a></code> | <code>*f64</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.config"></a>

```go
Config *string
```

- *Type:* *string

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#config GoogleSpannerInstancePartition#config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#display_name GoogleSpannerInstancePartition#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#instance GoogleSpannerInstancePartition#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#name GoogleSpannerInstancePartition#name}

---

##### `AutoscalingConfig`<sup>Optional</sup> <a name="AutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.autoscalingConfig"></a>

```go
AutoscalingConfig GoogleSpannerInstancePartitionAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#autoscaling_config GoogleSpannerInstancePartition#autoscaling_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#deletion_policy GoogleSpannerInstancePartition#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count, processing_units,
or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#node_count GoogleSpannerInstancePartition#node_count}

---

##### `ProcessingUnits`<sup>Optional</sup> <a name="ProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.processingUnits"></a>

```go
ProcessingUnits *f64
```

- *Type:* *f64

The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#processing_units GoogleSpannerInstancePartition#processing_units}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.timeouts"></a>

```go
Timeouts GoogleSpannerInstancePartitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#timeouts GoogleSpannerInstancePartition#timeouts}

---

### GoogleSpannerInstancePartitionTimeouts <a name="GoogleSpannerInstancePartitionTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

&googlespannerinstancepartition.GoogleSpannerInstancePartitionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#create GoogleSpannerInstancePartition#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#delete GoogleSpannerInstancePartition#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#update GoogleSpannerInstancePartition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#create GoogleSpannerInstancePartition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#delete GoogleSpannerInstancePartition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_spanner_instance_partition#update GoogleSpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.NewGoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">ResetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">ResetMinProcessingUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```go
func ResetMaxNodes()
```

##### `ResetMaxProcessingUnits` <a name="ResetMaxProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```go
func ResetMaxProcessingUnits()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```go
func ResetMinNodes()
```

##### `ResetMinProcessingUnits` <a name="ResetMinProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```go
func ResetMinProcessingUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">MaxProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">MinProcessingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">MaxProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">MinProcessingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MaxProcessingUnitsInput`<sup>Optional</sup> <a name="MaxProcessingUnitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```go
func MaxProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnitsInput`<sup>Optional</sup> <a name="MinProcessingUnitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```go
func MinProcessingUnitsInput() *f64
```

- *Type:* *f64

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MaxProcessingUnits`<sup>Required</sup> <a name="MaxProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```go
func MaxProcessingUnits() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `MinProcessingUnits`<sup>Required</sup> <a name="MinProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```go
func MinProcessingUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---


### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.NewGoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">ResetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">ResetStorageUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent">ResetTotalCpuUtilizationPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHighPriorityCpuUtilizationPercent` <a name="ResetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```go
func ResetHighPriorityCpuUtilizationPercent()
```

##### `ResetStorageUtilizationPercent` <a name="ResetStorageUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```go
func ResetStorageUtilizationPercent()
```

##### `ResetTotalCpuUtilizationPercent` <a name="ResetTotalCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent"></a>

```go
func ResetTotalCpuUtilizationPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">HighPriorityCpuUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">StorageUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput">TotalCpuUtilizationPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">HighPriorityCpuUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">StorageUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent">TotalCpuUtilizationPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HighPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="HighPriorityCpuUtilizationPercentInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```go
func HighPriorityCpuUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `StorageUtilizationPercentInput`<sup>Optional</sup> <a name="StorageUtilizationPercentInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```go
func StorageUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `TotalCpuUtilizationPercentInput`<sup>Optional</sup> <a name="TotalCpuUtilizationPercentInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput"></a>

```go
func TotalCpuUtilizationPercentInput() *f64
```

- *Type:* *f64

---

##### `HighPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="HighPriorityCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```go
func HighPriorityCpuUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `StorageUtilizationPercent`<sup>Required</sup> <a name="StorageUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```go
func StorageUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `TotalCpuUtilizationPercent`<sup>Required</sup> <a name="TotalCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent"></a>

```go
func TotalCpuUtilizationPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---


### GoogleSpannerInstancePartitionAutoscalingConfigOutputReference <a name="GoogleSpannerInstancePartitionAutoscalingConfigOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.NewGoogleSpannerInstancePartitionAutoscalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerInstancePartitionAutoscalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits">PutAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets">PutAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits">ResetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets">ResetAutoscalingTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingLimits` <a name="PutAutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```go
func PutAutoscalingLimits(value GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `PutAutoscalingTargets` <a name="PutAutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```go
func PutAutoscalingTargets(value GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `ResetAutoscalingLimits` <a name="ResetAutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```go
func ResetAutoscalingLimits()
```

##### `ResetAutoscalingTargets` <a name="ResetAutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```go
func ResetAutoscalingTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits">AutoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets">AutoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput">AutoscalingLimitsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput">AutoscalingTargetsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimits`<sup>Required</sup> <a name="AutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```go
func AutoscalingLimits() GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `AutoscalingTargets`<sup>Required</sup> <a name="AutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```go
func AutoscalingTargets() GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `AutoscalingLimitsInput`<sup>Optional</sup> <a name="AutoscalingLimitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```go
func AutoscalingLimitsInput() GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `AutoscalingTargetsInput`<sup>Optional</sup> <a name="AutoscalingTargetsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```go
func AutoscalingTargetsInput() GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSpannerInstancePartitionAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

---


### GoogleSpannerInstancePartitionTimeoutsOutputReference <a name="GoogleSpannerInstancePartitionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlespannerinstancepartition"

googlespannerinstancepartition.NewGoogleSpannerInstancePartitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSpannerInstancePartitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



