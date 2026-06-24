# `googleDiscoveryEngineServingConfig` Submodule <a name="`googleDiscoveryEngineServingConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineServingConfig <a name="GoogleDiscoveryEngineServingConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config google_discovery_engine_serving_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

googlediscoveryengineservingconfig.NewGoogleDiscoveryEngineServingConfig(scope Construct, id *string, config GoogleDiscoveryEngineServingConfigConfig) GoogleDiscoveryEngineServingConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig">GoogleDiscoveryEngineServingConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig">GoogleDiscoveryEngineServingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetBoostControlIds">ResetBoostControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetCollectionId">ResetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetFilterControlIds">ResetFilterControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetPromoteControlIds">ResetPromoteControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetRedirectControlIds">ResetRedirectControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetServingConfigId">ResetServingConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetSynonymsControlIds">ResetSynonymsControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDiscoveryEngineServingConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a>

---

##### `ResetBoostControlIds` <a name="ResetBoostControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetBoostControlIds"></a>

```go
func ResetBoostControlIds()
```

##### `ResetCollectionId` <a name="ResetCollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetCollectionId"></a>

```go
func ResetCollectionId()
```

##### `ResetFilterControlIds` <a name="ResetFilterControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetFilterControlIds"></a>

```go
func ResetFilterControlIds()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPromoteControlIds` <a name="ResetPromoteControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetPromoteControlIds"></a>

```go
func ResetPromoteControlIds()
```

##### `ResetRedirectControlIds` <a name="ResetRedirectControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetRedirectControlIds"></a>

```go
func ResetRedirectControlIds()
```

##### `ResetServingConfigId` <a name="ResetServingConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetServingConfigId"></a>

```go
func ResetServingConfigId()
```

##### `ResetSynonymsControlIds` <a name="ResetSynonymsControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetSynonymsControlIds"></a>

```go
func ResetSynonymsControlIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

googlediscoveryengineservingconfig.GoogleDiscoveryEngineServingConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

googlediscoveryengineservingconfig.GoogleDiscoveryEngineServingConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

googlediscoveryengineservingconfig.GoogleDiscoveryEngineServingConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

googlediscoveryengineservingconfig.GoogleDiscoveryEngineServingConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDiscoveryEngineServingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDiscoveryEngineServingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineServingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference">GoogleDiscoveryEngineServingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIdsInput">BoostControlIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIdsInput">FilterControlIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIdsInput">PromoteControlIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIdsInput">RedirectControlIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigIdInput">ServingConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIdsInput">SynonymsControlIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIds">BoostControlIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIds">FilterControlIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIds">PromoteControlIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIds">RedirectControlIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigId">ServingConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIds">SynonymsControlIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeouts"></a>

```go
func Timeouts() GoogleDiscoveryEngineServingConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference">GoogleDiscoveryEngineServingConfigTimeoutsOutputReference</a>

---

##### `BoostControlIdsInput`<sup>Optional</sup> <a name="BoostControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIdsInput"></a>

```go
func BoostControlIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `FilterControlIdsInput`<sup>Optional</sup> <a name="FilterControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIdsInput"></a>

```go
func FilterControlIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PromoteControlIdsInput`<sup>Optional</sup> <a name="PromoteControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIdsInput"></a>

```go
func PromoteControlIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectControlIdsInput`<sup>Optional</sup> <a name="RedirectControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIdsInput"></a>

```go
func RedirectControlIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServingConfigIdInput`<sup>Optional</sup> <a name="ServingConfigIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigIdInput"></a>

```go
func ServingConfigIdInput() *string
```

- *Type:* *string

---

##### `SynonymsControlIdsInput`<sup>Optional</sup> <a name="SynonymsControlIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIdsInput"></a>

```go
func SynonymsControlIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BoostControlIds`<sup>Required</sup> <a name="BoostControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.boostControlIds"></a>

```go
func BoostControlIds() *[]*string
```

- *Type:* *[]*string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `FilterControlIds`<sup>Required</sup> <a name="FilterControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.filterControlIds"></a>

```go
func FilterControlIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PromoteControlIds`<sup>Required</sup> <a name="PromoteControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.promoteControlIds"></a>

```go
func PromoteControlIds() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectControlIds`<sup>Required</sup> <a name="RedirectControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.redirectControlIds"></a>

```go
func RedirectControlIds() *[]*string
```

- *Type:* *[]*string

---

##### `ServingConfigId`<sup>Required</sup> <a name="ServingConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.servingConfigId"></a>

```go
func ServingConfigId() *string
```

- *Type:* *string

---

##### `SynonymsControlIds`<sup>Required</sup> <a name="SynonymsControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.synonymsControlIds"></a>

```go
func SynonymsControlIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineServingConfigConfig <a name="GoogleDiscoveryEngineServingConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

&googlediscoveryengineservingconfig.GoogleDiscoveryEngineServingConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EngineId: *string,
	Location: *string,
	BoostControlIds: *[]*string,
	CollectionId: *string,
	FilterControlIds: *[]*string,
	Id: *string,
	Project: *string,
	PromoteControlIds: *[]*string,
	RedirectControlIds: *[]*string,
	ServingConfigId: *string,
	SynonymsControlIds: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.engineId">EngineId</a></code> | <code>*string</code> | The ID of the engine associated with the serving config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.boostControlIds">BoostControlIds</a></code> | <code>*[]*string</code> | The resource IDs of the boost controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.filterControlIds">FilterControlIds</a></code> | <code>*[]*string</code> | The resource IDs of the filter controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#id GoogleDiscoveryEngineServingConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#project GoogleDiscoveryEngineServingConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.promoteControlIds">PromoteControlIds</a></code> | <code>*[]*string</code> | The resource IDs of the promote controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.redirectControlIds">RedirectControlIds</a></code> | <code>*[]*string</code> | The resource IDs of the redirect controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.servingConfigId">ServingConfigId</a></code> | <code>*string</code> | 'The unique ID of the serving config. Currently only accepts "default_search".'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.synonymsControlIds">SynonymsControlIds</a></code> | <code>*[]*string</code> | The resource IDs of the synonyms controls to be applied. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

The ID of the engine associated with the serving config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#engine_id GoogleDiscoveryEngineServingConfig#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#location GoogleDiscoveryEngineServingConfig#location}

---

##### `BoostControlIds`<sup>Optional</sup> <a name="BoostControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.boostControlIds"></a>

```go
BoostControlIds *[]*string
```

- *Type:* *[]*string

The resource IDs of the boost controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#boost_control_ids GoogleDiscoveryEngineServingConfig#boost_control_ids}

---

##### `CollectionId`<sup>Optional</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#collection_id GoogleDiscoveryEngineServingConfig#collection_id}

---

##### `FilterControlIds`<sup>Optional</sup> <a name="FilterControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.filterControlIds"></a>

```go
FilterControlIds *[]*string
```

- *Type:* *[]*string

The resource IDs of the filter controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#filter_control_ids GoogleDiscoveryEngineServingConfig#filter_control_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#id GoogleDiscoveryEngineServingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#project GoogleDiscoveryEngineServingConfig#project}.

---

##### `PromoteControlIds`<sup>Optional</sup> <a name="PromoteControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.promoteControlIds"></a>

```go
PromoteControlIds *[]*string
```

- *Type:* *[]*string

The resource IDs of the promote controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#promote_control_ids GoogleDiscoveryEngineServingConfig#promote_control_ids}

---

##### `RedirectControlIds`<sup>Optional</sup> <a name="RedirectControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.redirectControlIds"></a>

```go
RedirectControlIds *[]*string
```

- *Type:* *[]*string

The resource IDs of the redirect controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#redirect_control_ids GoogleDiscoveryEngineServingConfig#redirect_control_ids}

---

##### `ServingConfigId`<sup>Optional</sup> <a name="ServingConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.servingConfigId"></a>

```go
ServingConfigId *string
```

- *Type:* *string

'The unique ID of the serving config. Currently only accepts "default_search".'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#serving_config_id GoogleDiscoveryEngineServingConfig#serving_config_id}

---

##### `SynonymsControlIds`<sup>Optional</sup> <a name="SynonymsControlIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.synonymsControlIds"></a>

```go
SynonymsControlIds *[]*string
```

- *Type:* *[]*string

The resource IDs of the synonyms controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#synonyms_control_ids GoogleDiscoveryEngineServingConfig#synonyms_control_ids}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleDiscoveryEngineServingConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts">GoogleDiscoveryEngineServingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#timeouts GoogleDiscoveryEngineServingConfig#timeouts}

---

### GoogleDiscoveryEngineServingConfigTimeouts <a name="GoogleDiscoveryEngineServingConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

&googlediscoveryengineservingconfig.GoogleDiscoveryEngineServingConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#create GoogleDiscoveryEngineServingConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#delete GoogleDiscoveryEngineServingConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#update GoogleDiscoveryEngineServingConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#create GoogleDiscoveryEngineServingConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#delete GoogleDiscoveryEngineServingConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_serving_config#update GoogleDiscoveryEngineServingConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineServingConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineServingConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryengineservingconfig"

googlediscoveryengineservingconfig.NewGoogleDiscoveryEngineServingConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineServingConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineServingConfig.GoogleDiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



