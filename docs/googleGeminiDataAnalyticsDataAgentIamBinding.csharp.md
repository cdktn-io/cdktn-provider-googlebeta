# `googleGeminiDataAnalyticsDataAgentIamBinding` Submodule <a name="`googleGeminiDataAnalyticsDataAgentIamBinding` Submodule" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiDataAnalyticsDataAgentIamBinding <a name="GoogleGeminiDataAnalyticsDataAgentIamBinding" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding google_gemini_data_analytics_data_agent_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamBinding(Construct Scope, string Id, GoogleGeminiDataAnalyticsDataAgentIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig">GoogleGeminiDataAnalyticsDataAgentIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig">GoogleGeminiDataAnalyticsDataAgentIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleGeminiDataAnalyticsDataAgentIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiDataAnalyticsDataAgentIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleGeminiDataAnalyticsDataAgentIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiDataAnalyticsDataAgentIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiDataAnalyticsDataAgentIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiDataAnalyticsDataAgentIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference">GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentIdInput">DataAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.condition"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference">GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.conditionInput"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

---

##### `DataAgentIdInput`<sup>Optional</sup> <a name="DataAgentIdInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentIdInput"></a>

```csharp
public string DataAgentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiDataAnalyticsDataAgentIamBindingCondition <a name="GoogleGeminiDataAnalyticsDataAgentIamBindingCondition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#expression GoogleGeminiDataAnalyticsDataAgentIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#title GoogleGeminiDataAnalyticsDataAgentIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#description GoogleGeminiDataAnalyticsDataAgentIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#expression GoogleGeminiDataAnalyticsDataAgentIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#title GoogleGeminiDataAnalyticsDataAgentIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#description GoogleGeminiDataAnalyticsDataAgentIamBinding#description}.

---

### GoogleGeminiDataAnalyticsDataAgentIamBindingConfig <a name="GoogleGeminiDataAnalyticsDataAgentIamBindingConfig" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAgentId,
    string[] Members,
    string Role,
    GoogleGeminiDataAnalyticsDataAgentIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamBinding#data_agent_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#members GoogleGeminiDataAnalyticsDataAgentIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#role GoogleGeminiDataAnalyticsDataAgentIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#id GoogleGeminiDataAnalyticsDataAgentIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#location GoogleGeminiDataAnalyticsDataAgentIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#project GoogleGeminiDataAnalyticsDataAgentIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamBinding#data_agent_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#members GoogleGeminiDataAnalyticsDataAgentIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#role GoogleGeminiDataAnalyticsDataAgentIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.condition"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#condition GoogleGeminiDataAnalyticsDataAgentIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#id GoogleGeminiDataAnalyticsDataAgentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#location GoogleGeminiDataAnalyticsDataAgentIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#project GoogleGeminiDataAnalyticsDataAgentIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference <a name="GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

---



