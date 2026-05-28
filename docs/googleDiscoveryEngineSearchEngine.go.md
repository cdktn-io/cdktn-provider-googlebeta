# `googleDiscoveryEngineSearchEngine` Submodule <a name="`googleDiscoveryEngineSearchEngine` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineSearchEngine <a name="GoogleDiscoveryEngineSearchEngine" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine google_discovery_engine_search_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.NewGoogleDiscoveryEngineSearchEngine(scope Construct, id *string, config GoogleDiscoveryEngineSearchEngineConfig) GoogleDiscoveryEngineSearchEngine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig">PutCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig">PutKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig">PutSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetAppType">ResetAppType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetCommonConfig">ResetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDisableAnalytics">ResetDisableAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetIndustryVertical">ResetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKnowledgeGraphConfig">ResetKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCommonConfig` <a name="PutCommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig"></a>

```go
func PutCommonConfig(value GoogleDiscoveryEngineSearchEngineCommonConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---

##### `PutKnowledgeGraphConfig` <a name="PutKnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig"></a>

```go
func PutKnowledgeGraphConfig(value GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `PutSearchEngineConfig` <a name="PutSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig"></a>

```go
func PutSearchEngineConfig(value GoogleDiscoveryEngineSearchEngineSearchEngineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDiscoveryEngineSearchEngineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

---

##### `ResetAppType` <a name="ResetAppType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetAppType"></a>

```go
func ResetAppType()
```

##### `ResetCommonConfig` <a name="ResetCommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetCommonConfig"></a>

```go
func ResetCommonConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisableAnalytics` <a name="ResetDisableAnalytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDisableAnalytics"></a>

```go
func ResetDisableAnalytics()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetFeatures"></a>

```go
func ResetFeatures()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetId"></a>

```go
func ResetId()
```

##### `ResetIndustryVertical` <a name="ResetIndustryVertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetIndustryVertical"></a>

```go
func ResetIndustryVertical()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetKnowledgeGraphConfig` <a name="ResetKnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKnowledgeGraphConfig"></a>

```go
func ResetKnowledgeGraphConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDiscoveryEngineSearchEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDiscoveryEngineSearchEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineSearchEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference">GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfig">KnowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfig">SearchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference">GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference">GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appTypeInput">AppTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfigInput">CommonConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIdsInput">DataStoreIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalyticsInput">DisableAnalyticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.featuresInput">FeaturesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVerticalInput">IndustryVerticalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput">KnowledgeGraphConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfigInput">SearchEngineConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appType">AppType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIds">DataStoreIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalytics">DisableAnalytics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.features">Features</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVertical">IndustryVertical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommonConfig`<sup>Required</sup> <a name="CommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfig"></a>

```go
func CommonConfig() GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference">GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `KnowledgeGraphConfig`<sup>Required</sup> <a name="KnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfig"></a>

```go
func KnowledgeGraphConfig() GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SearchEngineConfig`<sup>Required</sup> <a name="SearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfig"></a>

```go
func SearchEngineConfig() GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference">GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeouts"></a>

```go
func Timeouts() GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference">GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AppTypeInput`<sup>Optional</sup> <a name="AppTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appTypeInput"></a>

```go
func AppTypeInput() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `CommonConfigInput`<sup>Optional</sup> <a name="CommonConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfigInput"></a>

```go
func CommonConfigInput() GoogleDiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---

##### `DataStoreIdsInput`<sup>Optional</sup> <a name="DataStoreIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIdsInput"></a>

```go
func DataStoreIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisableAnalyticsInput`<sup>Optional</sup> <a name="DisableAnalyticsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalyticsInput"></a>

```go
func DisableAnalyticsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.featuresInput"></a>

```go
func FeaturesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndustryVerticalInput`<sup>Optional</sup> <a name="IndustryVerticalInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVerticalInput"></a>

```go
func IndustryVerticalInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KnowledgeGraphConfigInput`<sup>Optional</sup> <a name="KnowledgeGraphConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput"></a>

```go
func KnowledgeGraphConfigInput() GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SearchEngineConfigInput`<sup>Optional</sup> <a name="SearchEngineConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfigInput"></a>

```go
func SearchEngineConfigInput() GoogleDiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppType`<sup>Required</sup> <a name="AppType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appType"></a>

```go
func AppType() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIds"></a>

```go
func DataStoreIds() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisableAnalytics`<sup>Required</sup> <a name="DisableAnalytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalytics"></a>

```go
func DisableAnalytics() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.features"></a>

```go
func Features() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndustryVertical`<sup>Required</sup> <a name="IndustryVertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVertical"></a>

```go
func IndustryVertical() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineSearchEngineCommonConfig <a name="GoogleDiscoveryEngineSearchEngineCommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

&googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngineCommonConfig {
	CompanyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.property.companyName">CompanyName</a></code> | <code>*string</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#company_name GoogleDiscoveryEngineSearchEngine#company_name}

---

### GoogleDiscoveryEngineSearchEngineConfig <a name="GoogleDiscoveryEngineSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

&googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionId: *string,
	DataStoreIds: *[]*string,
	DisplayName: *string,
	EngineId: *string,
	Location: *string,
	SearchEngineConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig,
	AppType: *string,
	CommonConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig,
	DeletionPolicy: *string,
	DisableAnalytics: interface{},
	Features: *map[string]*string,
	Id: *string,
	IndustryVertical: *string,
	KmsKeyName: *string,
	KnowledgeGraphConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dataStoreIds">DataStoreIds</a></code> | <code>*[]*string</code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.engineId">EngineId</a></code> | <code>*string</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.location">Location</a></code> | <code>*string</code> | Location. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.searchEngineConfig">SearchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.appType">AppType</a></code> | <code>*string</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.disableAnalytics">DisableAnalytics</a></code> | <code>interface{}</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.features">Features</a></code> | <code>*map[string]*string</code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.industryVertical">IndustryVertical</a></code> | <code>*string</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig">KnowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#collection_id GoogleDiscoveryEngineSearchEngine#collection_id}

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dataStoreIds"></a>

```go
DataStoreIds *[]*string
```

- *Type:* *[]*string

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#data_store_ids GoogleDiscoveryEngineSearchEngine#data_store_ids}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#display_name GoogleDiscoveryEngineSearchEngine#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#engine_id GoogleDiscoveryEngineSearchEngine#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#location GoogleDiscoveryEngineSearchEngine#location}

---

##### `SearchEngineConfig`<sup>Required</sup> <a name="SearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.searchEngineConfig"></a>

```go
SearchEngineConfig GoogleDiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_engine_config GoogleDiscoveryEngineSearchEngine#search_engine_config}

---

##### `AppType`<sup>Optional</sup> <a name="AppType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.appType"></a>

```go
AppType *string
```

- *Type:* *string

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#app_type GoogleDiscoveryEngineSearchEngine#app_type}

---

##### `CommonConfig`<sup>Optional</sup> <a name="CommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.commonConfig"></a>

```go
CommonConfig GoogleDiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#common_config GoogleDiscoveryEngineSearchEngine#common_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#deletion_policy GoogleDiscoveryEngineSearchEngine#deletion_policy}

---

##### `DisableAnalytics`<sup>Optional</sup> <a name="DisableAnalytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.disableAnalytics"></a>

```go
DisableAnalytics interface{}
```

- *Type:* interface{}

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_analytics GoogleDiscoveryEngineSearchEngine#disable_analytics}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.features"></a>

```go
Features *map[string]*string
```

- *Type:* *map[string]*string

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#features GoogleDiscoveryEngineSearchEngine#features}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndustryVertical`<sup>Optional</sup> <a name="IndustryVertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.industryVertical"></a>

```go
IndustryVertical *string
```

- *Type:* *string

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#industry_vertical GoogleDiscoveryEngineSearchEngine#industry_vertical}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#kms_key_name GoogleDiscoveryEngineSearchEngine#kms_key_name}

---

##### `KnowledgeGraphConfig`<sup>Optional</sup> <a name="KnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig"></a>

```go
KnowledgeGraphConfig GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#knowledge_graph_config GoogleDiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.timeouts"></a>

```go
Timeouts GoogleDiscoveryEngineSearchEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#timeouts GoogleDiscoveryEngineSearchEngine#timeouts}

---

### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

&googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig {
	CloudKnowledgeGraphTypes: *[]*string,
	EnableCloudKnowledgeGraph: interface{},
	EnablePrivateKnowledgeGraph: interface{},
	FeatureConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes">CloudKnowledgeGraphTypes</a></code> | <code>*[]*string</code> | Specify entity types to support. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph">EnableCloudKnowledgeGraph</a></code> | <code>interface{}</code> | Whether to enable the Cloud Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph">EnablePrivateKnowledgeGraph</a></code> | <code>interface{}</code> | Whether to enable the Private Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig">FeatureConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | feature_config block. |

---

##### `CloudKnowledgeGraphTypes`<sup>Optional</sup> <a name="CloudKnowledgeGraphTypes" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes"></a>

```go
CloudKnowledgeGraphTypes *[]*string
```

- *Type:* *[]*string

Specify entity types to support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#cloud_knowledge_graph_types GoogleDiscoveryEngineSearchEngine#cloud_knowledge_graph_types}

---

##### `EnableCloudKnowledgeGraph`<sup>Optional</sup> <a name="EnableCloudKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph"></a>

```go
EnableCloudKnowledgeGraph interface{}
```

- *Type:* interface{}

Whether to enable the Cloud Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#enable_cloud_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}

---

##### `EnablePrivateKnowledgeGraph`<sup>Optional</sup> <a name="EnablePrivateKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph"></a>

```go
EnablePrivateKnowledgeGraph interface{}
```

- *Type:* interface{}

Whether to enable the Private Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#enable_private_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_private_knowledge_graph}

---

##### `FeatureConfig`<sup>Optional</sup> <a name="FeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig"></a>

```go
FeatureConfig GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

feature_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#feature_config GoogleDiscoveryEngineSearchEngine#feature_config}

---

### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

&googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig {
	DisablePrivateKgAutoComplete: interface{},
	DisablePrivateKgEnrichment: interface{},
	DisablePrivateKgQueryUiChips: interface{},
	DisablePrivateKgQueryUnderstanding: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete">DisablePrivateKgAutoComplete</a></code> | <code>interface{}</code> | Whether to disable the private KG auto complete for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment">DisablePrivateKgEnrichment</a></code> | <code>interface{}</code> | Whether to disable the private KG enrichment for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips">DisablePrivateKgQueryUiChips</a></code> | <code>interface{}</code> | Whether to disable the private KG for query UI chips. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding">DisablePrivateKgQueryUnderstanding</a></code> | <code>interface{}</code> | Whether to disable the private KG query understanding for the engine. |

---

##### `DisablePrivateKgAutoComplete`<sup>Optional</sup> <a name="DisablePrivateKgAutoComplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete"></a>

```go
DisablePrivateKgAutoComplete interface{}
```

- *Type:* interface{}

Whether to disable the private KG auto complete for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_auto_complete GoogleDiscoveryEngineSearchEngine#disable_private_kg_auto_complete}

---

##### `DisablePrivateKgEnrichment`<sup>Optional</sup> <a name="DisablePrivateKgEnrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment"></a>

```go
DisablePrivateKgEnrichment interface{}
```

- *Type:* interface{}

Whether to disable the private KG enrichment for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_enrichment GoogleDiscoveryEngineSearchEngine#disable_private_kg_enrichment}

---

##### `DisablePrivateKgQueryUiChips`<sup>Optional</sup> <a name="DisablePrivateKgQueryUiChips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips"></a>

```go
DisablePrivateKgQueryUiChips interface{}
```

- *Type:* interface{}

Whether to disable the private KG for query UI chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_ui_chips GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}

---

##### `DisablePrivateKgQueryUnderstanding`<sup>Optional</sup> <a name="DisablePrivateKgQueryUnderstanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding"></a>

```go
DisablePrivateKgQueryUnderstanding interface{}
```

- *Type:* interface{}

Whether to disable the private KG query understanding for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_understanding GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_understanding}

---

### GoogleDiscoveryEngineSearchEngineSearchEngineConfig <a name="GoogleDiscoveryEngineSearchEngineSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

&googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig {
	RequiredSubscriptionTier: *string,
	SearchAddOns: *[]*string,
	SearchTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier">RequiredSubscriptionTier</a></code> | <code>*string</code> | The required subscription tier of this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns">SearchAddOns</a></code> | <code>*[]*string</code> | The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier">SearchTier</a></code> | <code>*string</code> | The search feature tier of this engine. |

---

##### `RequiredSubscriptionTier`<sup>Optional</sup> <a name="RequiredSubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier"></a>

```go
RequiredSubscriptionTier *string
```

- *Type:* *string

The required subscription tier of this engine.

They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#required_subscription_tier GoogleDiscoveryEngineSearchEngine#required_subscription_tier}

---

##### `SearchAddOns`<sup>Optional</sup> <a name="SearchAddOns" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns"></a>

```go
SearchAddOns *[]*string
```

- *Type:* *[]*string

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_add_ons GoogleDiscoveryEngineSearchEngine#search_add_ons}

---

##### `SearchTier`<sup>Optional</sup> <a name="SearchTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier"></a>

```go
SearchTier *string
```

- *Type:* *string

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_tier GoogleDiscoveryEngineSearchEngine#search_tier}

---

### GoogleDiscoveryEngineSearchEngineTimeouts <a name="GoogleDiscoveryEngineSearchEngineTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

&googlediscoveryenginesearchengine.GoogleDiscoveryEngineSearchEngineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#create GoogleDiscoveryEngineSearchEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#delete GoogleDiscoveryEngineSearchEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#update GoogleDiscoveryEngineSearchEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#create GoogleDiscoveryEngineSearchEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#delete GoogleDiscoveryEngineSearchEngine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#update GoogleDiscoveryEngineSearchEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.NewGoogleDiscoveryEngineSearchEngineCommonConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName">ResetCompanyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName"></a>

```go
func ResetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---


### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.NewGoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete">ResetDisablePrivateKgAutoComplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment">ResetDisablePrivateKgEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips">ResetDisablePrivateKgQueryUiChips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding">ResetDisablePrivateKgQueryUnderstanding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisablePrivateKgAutoComplete` <a name="ResetDisablePrivateKgAutoComplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete"></a>

```go
func ResetDisablePrivateKgAutoComplete()
```

##### `ResetDisablePrivateKgEnrichment` <a name="ResetDisablePrivateKgEnrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment"></a>

```go
func ResetDisablePrivateKgEnrichment()
```

##### `ResetDisablePrivateKgQueryUiChips` <a name="ResetDisablePrivateKgQueryUiChips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips"></a>

```go
func ResetDisablePrivateKgQueryUiChips()
```

##### `ResetDisablePrivateKgQueryUnderstanding` <a name="ResetDisablePrivateKgQueryUnderstanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding"></a>

```go
func ResetDisablePrivateKgQueryUnderstanding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput">DisablePrivateKgAutoCompleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput">DisablePrivateKgEnrichmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput">DisablePrivateKgQueryUiChipsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput">DisablePrivateKgQueryUnderstandingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete">DisablePrivateKgAutoComplete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment">DisablePrivateKgEnrichment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips">DisablePrivateKgQueryUiChips</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding">DisablePrivateKgQueryUnderstanding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisablePrivateKgAutoCompleteInput`<sup>Optional</sup> <a name="DisablePrivateKgAutoCompleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput"></a>

```go
func DisablePrivateKgAutoCompleteInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePrivateKgEnrichmentInput`<sup>Optional</sup> <a name="DisablePrivateKgEnrichmentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput"></a>

```go
func DisablePrivateKgEnrichmentInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePrivateKgQueryUiChipsInput`<sup>Optional</sup> <a name="DisablePrivateKgQueryUiChipsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput"></a>

```go
func DisablePrivateKgQueryUiChipsInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePrivateKgQueryUnderstandingInput`<sup>Optional</sup> <a name="DisablePrivateKgQueryUnderstandingInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput"></a>

```go
func DisablePrivateKgQueryUnderstandingInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePrivateKgAutoComplete`<sup>Required</sup> <a name="DisablePrivateKgAutoComplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete"></a>

```go
func DisablePrivateKgAutoComplete() interface{}
```

- *Type:* interface{}

---

##### `DisablePrivateKgEnrichment`<sup>Required</sup> <a name="DisablePrivateKgEnrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment"></a>

```go
func DisablePrivateKgEnrichment() interface{}
```

- *Type:* interface{}

---

##### `DisablePrivateKgQueryUiChips`<sup>Required</sup> <a name="DisablePrivateKgQueryUiChips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips"></a>

```go
func DisablePrivateKgQueryUiChips() interface{}
```

- *Type:* interface{}

---

##### `DisablePrivateKgQueryUnderstanding`<sup>Required</sup> <a name="DisablePrivateKgQueryUnderstanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding"></a>

```go
func DisablePrivateKgQueryUnderstanding() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---


### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.NewGoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig">PutFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes">ResetCloudKnowledgeGraphTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph">ResetEnableCloudKnowledgeGraph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph">ResetEnablePrivateKnowledgeGraph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig">ResetFeatureConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatureConfig` <a name="PutFeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig"></a>

```go
func PutFeatureConfig(value GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `ResetCloudKnowledgeGraphTypes` <a name="ResetCloudKnowledgeGraphTypes" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes"></a>

```go
func ResetCloudKnowledgeGraphTypes()
```

##### `ResetEnableCloudKnowledgeGraph` <a name="ResetEnableCloudKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph"></a>

```go
func ResetEnableCloudKnowledgeGraph()
```

##### `ResetEnablePrivateKnowledgeGraph` <a name="ResetEnablePrivateKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph"></a>

```go
func ResetEnablePrivateKnowledgeGraph()
```

##### `ResetFeatureConfig` <a name="ResetFeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig"></a>

```go
func ResetFeatureConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig">FeatureConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput">CloudKnowledgeGraphTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput">EnableCloudKnowledgeGraphInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput">EnablePrivateKnowledgeGraphInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput">FeatureConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes">CloudKnowledgeGraphTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph">EnableCloudKnowledgeGraph</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph">EnablePrivateKnowledgeGraph</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureConfig`<sup>Required</sup> <a name="FeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig"></a>

```go
func FeatureConfig() GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a>

---

##### `CloudKnowledgeGraphTypesInput`<sup>Optional</sup> <a name="CloudKnowledgeGraphTypesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput"></a>

```go
func CloudKnowledgeGraphTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableCloudKnowledgeGraphInput`<sup>Optional</sup> <a name="EnableCloudKnowledgeGraphInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput"></a>

```go
func EnableCloudKnowledgeGraphInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivateKnowledgeGraphInput`<sup>Optional</sup> <a name="EnablePrivateKnowledgeGraphInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput"></a>

```go
func EnablePrivateKnowledgeGraphInput() interface{}
```

- *Type:* interface{}

---

##### `FeatureConfigInput`<sup>Optional</sup> <a name="FeatureConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput"></a>

```go
func FeatureConfigInput() GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `CloudKnowledgeGraphTypes`<sup>Required</sup> <a name="CloudKnowledgeGraphTypes" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes"></a>

```go
func CloudKnowledgeGraphTypes() *[]*string
```

- *Type:* *[]*string

---

##### `EnableCloudKnowledgeGraph`<sup>Required</sup> <a name="EnableCloudKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph"></a>

```go
func EnableCloudKnowledgeGraph() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivateKnowledgeGraph`<sup>Required</sup> <a name="EnablePrivateKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph"></a>

```go
func EnablePrivateKnowledgeGraph() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---


### GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.NewGoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier">ResetRequiredSubscriptionTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns">ResetSearchAddOns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier">ResetSearchTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequiredSubscriptionTier` <a name="ResetRequiredSubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier"></a>

```go
func ResetRequiredSubscriptionTier()
```

##### `ResetSearchAddOns` <a name="ResetSearchAddOns" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns"></a>

```go
func ResetSearchAddOns()
```

##### `ResetSearchTier` <a name="ResetSearchTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier"></a>

```go
func ResetSearchTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput">RequiredSubscriptionTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput">SearchAddOnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput">SearchTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier">RequiredSubscriptionTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns">SearchAddOns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier">SearchTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequiredSubscriptionTierInput`<sup>Optional</sup> <a name="RequiredSubscriptionTierInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput"></a>

```go
func RequiredSubscriptionTierInput() *string
```

- *Type:* *string

---

##### `SearchAddOnsInput`<sup>Optional</sup> <a name="SearchAddOnsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput"></a>

```go
func SearchAddOnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchTierInput`<sup>Optional</sup> <a name="SearchTierInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput"></a>

```go
func SearchTierInput() *string
```

- *Type:* *string

---

##### `RequiredSubscriptionTier`<sup>Required</sup> <a name="RequiredSubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier"></a>

```go
func RequiredSubscriptionTier() *string
```

- *Type:* *string

---

##### `SearchAddOns`<sup>Required</sup> <a name="SearchAddOns" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns"></a>

```go
func SearchAddOns() *[]*string
```

- *Type:* *[]*string

---

##### `SearchTier`<sup>Required</sup> <a name="SearchTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier"></a>

```go
func SearchTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---


### GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference <a name="GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginesearchengine"

googlediscoveryenginesearchengine.NewGoogleDiscoveryEngineSearchEngineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



